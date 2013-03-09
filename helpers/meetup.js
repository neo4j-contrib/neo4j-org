var http=require('http');

function meetup(group,event,fun) {
    // graphdb-belgium/events/81881472
    http.get({host: 'api.meetup.com', path: '/oembed?url=http://meetup.com/'+group + (event == null ? "" : "/events/" + event)},
        function(r) {
            r.setEncoding('utf8');
            var content="";
            r.on("end",function(x) {
                var json=JSON.parse(content);
                fun(json);
            })
            r.on("data", function(data) {
                content += data;    
            })
        })
}

var meetups = {};
exports.add_route = function(path,app) {
    app.get(path,function(req,res) {
        var group=req.query['group'];
        var event=req.query['event'];
        var img=req.query['img'];
        if (!event && meetups[group]) {
            if (img) res.redirect(meetups[group]['img']);
            else res.send(200,meetups[group]['html'])
            return;
        }
        meetup(group,event, function(json) {
            var html=json['html'];
            if (!event) {
                meetups[group]={html:html};
                meetups[group]['img']=html.match(/"(https?:\/\/photos.+?(jpeg|jpg|png))"/)[1];
                if (img) { res.redirect(meetups[group]['img']); return;}
            }
            res.send(200,html);
        });
    });
}

exports.oembed = meetup
