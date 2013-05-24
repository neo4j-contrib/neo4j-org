exports.log = function(data) {
    var action = (data["data"]||{})["action"]||"no-action";
    console.log("# app.log #",action,JSON.stringify(data));
};
exports.init = function(app) {
    app.post("/api/log",function(req,res) {
        exports.log({data: req.body, ip: req.ip, ua: req.header("user-agent")});
        res.send(200,"");
    });
};
