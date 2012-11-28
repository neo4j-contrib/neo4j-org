var express = require('express')
  , http = require('http');

exports.add_console_forward=function(app) {

    var target = process.env.NEO4J_CONSOLE || "console-test.neo4j.org:80"
    var host =  target.split(":")[0];
    var port = target.split(":")[1];

    app.use(function(req, res, next) {
        var path = req.path;
        // console.log('app.use rawbody '+path);
        if (!path.match("^/console")) {
            return next();
        }
        if (path=="/console") return console_forward(req,res,"/");
        if (path.match("_$")) return console_forward(req,res,path.substring(0,path.length-1));

        var m=path.match("^/console/r/(.+)$");
        if (m) return console_forward(req,res,"/?id="+m[1]);
        console_forward(req,res,path);
    });

    function console_forward(sourceRequest, sourceResponse, path) {
        try {
            path = path || sourceRequest.path;
            // console.log("host: " + host+ " port "+port);
            // console.log("path: " + path);
            // console.log("querystring: " + sourceRequest.query);

            var headers = {connection: 'keep-alive'};
            for (var key in sourceRequest.headers) {
                if (key!="host") {
                    headers[key] = sourceRequest.headers[key];
                }
            }
            // console.log("header: " + JSON.stringify(headers));

            var targetRequest = http.request(
                {host: host, port:port, method:sourceRequest.method || "GET",
                    headers: headers, path: path},

                function(targetResponse) {
                    // console.log('STATUS: ' + targetResponse.statusCode);
                    // console.log('HEADERS: ' + JSON.stringify(targetResponse.headers));
                    sourceResponse.status(targetResponse.statusCode);
                    for (var key in targetResponse.headers) {
                        sourceResponse.header(key, targetResponse.headers[key]);
                        // console.log(key + ": " + targetResponse.headers[key])
                    }
                    var data='';
                    var isText=!targetResponse.headers['content-type'] || targetResponse.headers['content-type'].match("^text");
                    targetResponse.setEncoding(isText ? 'utf-8' : 'binary');
                    targetResponse.on('data', function (chunk) {
                        data += chunk;
                        // console.log("targetResponse content-type " + sourceResponse.get('Content-Type'));
                        // console.log('BODY: ' + (typeof(chunk)) + " offset " + (data ? data.offset : "no data") + " length  " + chunk.length + " " + (typeof(chunk) == 'string' ? chunk.substr(0, 100) + "\n" + chunk.substr(chunk.length - 100) + "\n" : ""));
                    });
                    targetResponse.on("end", function(err) {
                        // console.log("END: " + err + " offset " + (data ? data.offset : "no data") + " len: " + (data ? data.length : "no data")); // +data.toString()
                        if (data && data.length) {
                            sourceResponse.send(isText ? data : new Buffer(data, 'binary'));
                        }
                        sourceResponse.end();
                        // console.log("targetResponse content-type " + sourceResponse.get('Content-Type'))
                    })
                });

            targetRequest.on('error', function(e) {
                // console.log('problem with sourceRequest: ' + e.message);
                sourceResponse.send(500, e);
            });


            sourceRequest.on('data', function(chunk) {
                // console.log('app.use rawbody chunk: ' + chunk);
                targetRequest.write(chunk);
            });


            sourceRequest.on('end', function() {
                // console.log("sourceRequest.content-length " + sourceRequest.header("content-length"));
                targetRequest.end();
            });
        } catch(e) {
            sourceResponse.send(500, e);
        }
    }
}