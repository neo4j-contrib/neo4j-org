var   http = require('http')
	, https = require('https')


function load_github_content(locals, name, path, host) {
    locals.content[name]="Content not found";
    if (!host) host="raw.githubusercontent.com";
	try {
     var req=https.get({host: host, path: path},
        function(res) {
            res.on("data", function(data) {
                locals.content[name] = data.toString();
            })
        }, function(err) {
            console.log("Error during request to ",host,path,err);
        });
        req.on('error',function(err) {
            console.log("Error during request to ",host,path,err);
        });
        req.end();
        
	} catch(e) {
		console.log("Error loading content for",name,host,path,e)
		locals.content[name]="Content from http://"+host+"/"+path+" not loaded!";
	}
}

var doc_url = "http://docs.neo4j.org/chunked/milestone/"

function load_learn_content(locals, name, path, host) {
	try {
       var add_attribs='target="_blank" class="manual" ';
       if (!host) host="learn.neo4j.org";
       var req=http.get({host: host, path: path},
       function(res) {
            res.on("data", function(data) {
                var content = data.toString();
                content = content.replace(/<\/?(html|body|!DOCTYPE).*?>/g,"");
                content = content.replace(/-neo4j-version/g,locals.neo4j.version);
                content = content.replace(/<!\[CDATA\[|\]\]>/g,"");
                
                content = content.replace(/((?:href|src)\s*=\s*")([^"]+)/g, function (match, group1, group2) {
                    var fixed=group1+doc_url+group2;
                    if (group2.match("^http")) fixed=match;
                    else if (group2[0] == "#") fixed=group1+doc_url+group2.substr(1)+".html";
                    return add_attribs+fixed;
                })
                
//                    console.log("data="+content);
                if (locals.content[name]) {
                    var tmp = locals.content[name];
                    content = tmp + content;
                }
                locals.content[name] = content;
            })
        })
        req.on('error',function(err) {
            console.log("Error during request to ",host,path,err);
        });
        req.end();
    } catch(e) {
		console.log("Error loading content for",name,host,path,e)
		locals.content[name]="Content from http://"+host+"/"+path+" not loaded!";
	}
}

exports.load_learn_content = load_learn_content
exports.load_github_content = load_github_content
