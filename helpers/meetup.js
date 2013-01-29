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

exports.oembed = meetup