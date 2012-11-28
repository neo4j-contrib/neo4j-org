var express = require('express')
  , http = require('http');

exports.add_console_forward=function(app,express,http) {

    var host = "console-test.neo4j.org"; // "console-test.neo4j.org";
    var port = 80; // 80;

    String.prototype.startsWith = function(str) { return this.substr(0,str.length)==str;}
    app.use(function(req, res, next) {
        var path = req.path;
        // console.log('app.use rawbody '+path);
        if (!path.match("^/console")) {
            return next();
            }
        if (path=="/console") return console_forward(req,res,"/");

        var m=path.match("^/console/r/(.+)$");
        if (m) return console_forward(req,res,"/?id="+m[1]);
        console_forward(req,res,path);
    });

    function console_forward(request, response, path) {
        try {
            path = path || request.path;
            // console.log("host: " + host+ " port "+port);
            // console.log("path: " + path);
            // console.log("querystring: " + request.query);

            var headers = {connection: 'keep-alive'};
            for (var key in request.headers) {
                if (key!="host") {
                    headers[key] = request.headers[key];
                }
            }
            // console.log("header: " + JSON.stringify(headers));

            var req = http.request(
                {host: host, port:port, method:request.method || "GET",
                    headers: headers, path: path},

                function(res) {
                    // console.log('STATUS: ' + res.statusCode);
                    // console.log('HEADERS: ' + JSON.stringify(res.headers));
                    response.status(res.statusCode);
                    for (var key in res.headers) {
                        response.header(key, res.headers[key]);
                        // console.log(key + ": " + res.headers[key])
                    }
                    var data='';
                    var isText=!res.headers['content-type'] || res.headers['content-type'].match("^text");
                    res.setEncoding(isText ? 'utf-8' : 'binary');
                    res.on('data', function (chunk) {
                        data += chunk;
                        // console.log("res content-type " + response.get('Content-Type'));
                        // console.log('BODY: ' + (typeof(chunk)) + " offset " + (data ? data.offset : "no data") + " length  " + chunk.length + " " + (typeof(chunk) == 'string' ? chunk.substr(0, 100) + "\n" + chunk.substr(chunk.length - 100) + "\n" : ""));
                    });
                    res.on("end", function(err) {
                        // console.log("END: " + err + " offset " + (data ? data.offset : "no data") + " len: " + (data ? data.length : "no data")); // +data.toString()
                        if (data && data.length) {
                            response.send(isText ? data : new Buffer(data, 'binary'));
                        }
                        response.end();
                        // console.log("res content-type " + response.get('Content-Type'))
                    })
                });

            req.on('error', function(e) {
                // console.log('problem with request: ' + e.message);
                response.send(500, e);
            });


            request.on('data', function(chunk) {
                // console.log('app.use rawbody chunk: ' + chunk);
                req.write(chunk);
            });


            request.on('end', function() {
                // console.log("request.content-length " + request.header("content-length"));
                req.end();
            });
        } catch(e) {
            response.send(500, e);
        }
    }
}