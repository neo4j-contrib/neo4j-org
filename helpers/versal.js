var request=require('request');

var versalOrg = process.env.VERSAL_ORG;
var versalSecret = process.env.VERSAL_KEY;
var versalUrl = "https://stagingstack.versal.com";

function signup(email,fun) {
    request.post({uri:versalUrl + '/api2/orgs/'+versalOrg+'/users',
        headers:{SID:versalSecret},
        body: JSON.stringify({user: {email: email}, roles: ["learner"]})},
        function(error,r, body) {
            console.log(error, r.statusCode,body);
            if (error || r.statusCode != 201) return fun(error ? error["message"] : body);
            var data = JSON.parse(body);
            fun(null,data["user"]["id"]);
        });
}

function login(email,fun) {
    request.post({uri:versalUrl + '/api2/sessions',
        headers:{SID:versalSecret},
        body: JSON.stringify({email: email, orgId:versalOrg})},
        function(error,r, body) {
            console.log(error, r.statusCode,body);
            if (error || r.statusCode != 201) return fun(error ? error["message"] : body);
            var data = JSON.parse(body);
            fun(null,data["sessionId"]);
        });
}

exports.add_route = function(path,app) {
    app.post(path,function(req,res) {
        console.log(req.body,typeof req.body);
        if (!req.body || !req.body["email"]) return res.send(500,"Expected email field in body");
        var email = req.body["email"];
        login(email,function(err,session) {
            if (!err) return res.send(200,session);
            signup(email,function(err,userId) {
                if (err) return res.send(500,err);
                login(email, function(err,session) {
                    if (err) return res.send(500,err);
                    res.send(200,session);
                });
            });
        });
    });
};
