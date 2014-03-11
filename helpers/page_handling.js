var fs=require("fs");
var merge = require("../helpers/utils.js").merge;

exports.init = function(app,pages) {

    fs.readFile("views/partials/page.ejs", function (err, buf) {
        function addRoute(file,path,title) {
            app.get(page.path, function (req, res) {
                var params = merge(app.locals, { path:path, title:title || "", locals:merge(app.locals,res.locals)  });
                res.render(file, params);
            });
        }
        
        var template = buf.toString();
        if (!fs.existsSync('views/ejs')) fs.mkdirSync('views/ejs');
    //  console.log(template,err);
        for (key in pages) {
    
            //console.log("loading " + key);
            var page=pages[key];
            var config = page.config || {};
            var featuredArray = page.featured;
    
            if (!page['thumbnail']) {
                console.log("### page without thumbnail",key,page['title']);
            }
            if (featuredArray && featuredArray.length && 
                featuredArray[0].content && typeof featuredArray[0].content == "string" && featuredArray[0].content.match(/<%/)) {
    
                // works only for the first featured item
                var featured = featuredArray[0];
                if (!featured.type) {
                    console.log("Need type for featured ",featured," for page ",key);
                    break;
                }
//                console.log('use partial for', featured.type, "views/partials/" + featured.type + "/_full.ejs");
                // case 'track'            : %><% include partials/track/_full %>
    
                var partial = fs.readFileSync("views/partials/" + featured.type + "/_full.ejs");
//                console.log("partial",partial.toString())
                var newPartial = partial.toString().replace(new RegExp("<%- .*?item.content %>","g"),
                                             featured['content']);
    
//                console.log("newPartial",newPartial);
                var newFile=template.replace(new RegExp("<% include ../partials/item/_full %>","g"), newPartial);
                var file="ejs/"+page.path.replace(/\//g,"_");
                var fileName="views/"+file+".ejs";
                fs.writeFileSync(fileName,newFile);
                console.log("Routing to special generated page: ",file,fileName,key,page.path,page.title,featured.type);
                addRoute(file,page.path,page.title);
            } else {
                console.log("Default routing to pages: ",page.path,page.title)
                addRoute('partials/page',page.path,page.title);
            }
      }
    });
}
