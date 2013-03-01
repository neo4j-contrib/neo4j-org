
/**
 * Module dependencies.
 */
    
process.on('uncaughtException', function(err) {console.log("Uncaught Exception",err)});
    
var express = require('express')
  , routes = require('./routes/routes')
  , http = require('http')
  , https = require('https')
  , path = require('path')
  , ejs = require('ejs')
  , fs = require('fs')
  , experiment = ejs.render(fs.readFileSync("views/experiment.ejs", "utf-8"))  
  , forwarder=require("./helpers/forwarder")
  , munchkin=require("./helpers/munchkin")
  , data=require("./helpers/data")
//  , content_data=require("./helpers/content_data")
  ,  content=require("./helpers/content")
  , pages=require("./helpers/pages")
  , track_data=require("./helpers/track_data")
  , markdown = require("node-markdown").Markdown
  , calendar = require("./helpers/calendar")
  , spreadsheet = require("./helpers/spreadsheet")
  , content_loading = require("./helpers/content_loading")
  , meetup =  require("./helpers/meetup")
  , paths =  require("./helpers/path")
  , geoip =  require("./helpers/geoip")

var app = express();

app.locals({
  neo4j: {
    version: "1.9.M03",
    date: "Dec 21, 2012",
    summary: "Cypher improvements, Gremlin refactoring",
    readme: "http://blog.neo4j.org/2012/12/neo4j-19m03-released.html"
  } 
   ,neo4jGA: {
    version: "1.8.1"
   ,date: "Dec 14, 2012"
   ,summary: "General Availability"
   ,readme: "http://blog.neo4j.org/2012/12/neo4j-1-8-1-release-stability-and-cypher-performance.html"
  }
  , neo4jS: {
    version: "1.9-SNAPSHOT",
    date: "2013",
    summary: "Unstable Snapshot, for resolution issue verification"
  } 
});

app.locals.link_to= function(path,inner) {
    if (path) return "<a href="+path+" "+(path.match("^http") ? ' target="_blank" ':'')+">"+inner+"</a>";
    return inner;
}
app.locals.chunk = function(arr,size) {
    var res=[];
    for (var i=0;i<arr.length/size;i++) {
        res.push(arr.slice(i*size,(i+1)*size));        
    }
    return res;
}

app.locals.findItem=function(key) {
    console.log("findItem",key)
    if (typeof key == 'object') return key;
    var addType=function(item,type) {
        if (!item.type) item.type=type;
        return item;
    }
    if (pages.pages[key]) return addType(pages.pages[key],"page");
    if (content.content[key]) return addType(content.content[key],"content");
    if (content.content.drivers[key]) return addType(content.content.drivers[key],"driver");
    if (content.content.books[key]) return addType(content.content.books[key],"book");
    if (data.contributors[key]) return addType(data.contributors[key],"contributor");
    if (data.ext_content[key]) return addType(data.ext_content[key],"external");
    if (data.trainings[key]) return addType(data.trainings[key],"training");
    if (content.content.apps[key]) return addType(content.content.apps[key],"app");
    return key;
}

app.locals.render=ejs.render
app.locals._include=function(path,options) {
    var content=app.locals._include[path];
    if (!content) {
        content=fs.readFileSync("views/"+path+".ejs").toString();
        app.locals._include[path]=content;
    }
    return ejs.render(content, options); 
}

app.locals.versions={}

https.get({host: "raw.github.com", path: "/neo4j/current-versions/master/versions.json"},
    function(res) {
        res.on("data", function(data) {
            app.locals.versions = JSON.parse(data) || {};
            console.log(app.locals.versions);
            temp_update_version(app.locals.versions.stable,app.locals.neo4jGA,app.locals.versions.stable_date);
            temp_update_version(app.locals.versions.milestone,app.locals.neo4j,app.locals.versions.milestone_date);
            temp_update_version(app.locals.versions.snapshot,app.locals.neo4jS);
        })
    }).on('error', function(err) {
        console.log("Error retrieving versions ",err);
    })
forwarder.add_console_forward(app,express,http);

app.locals.content = {}

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.enable('trust proxy');
  app.use(express.favicon());
  app.use(function(req, res, next){
      res.locals.path = req.path;
      res.locals.index_page = ['/','/index','/index_graph','/index_graph_svg'].indexOf(req.path) != -1
      res.locals.run_experiment = app.get('env') == 'production' && res.locals.index_page
      next();
  });  
  app.use(function(req,res, next) {
    try {
        res.locals.region=geoip.region(req.ip);
    } catch(e) {
        console.log("Error getting ip",req.ip,e)
        res.locals.region='US';
    }
    next();
  });
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('value in relationships'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

ejs.filters.md = function(b) { 
   return markdown(b) 
}; 

ejs.filters.wrap = function(content, tag) {
    return "<"+tag+">"+content+"</"+tag+">";
}

app.configure('development', function(){
  app.use(express.errorHandler());
});

var rnd = function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

app.locals.theme = function() {
   return "aqua";
}

app.locals.drivers=data.drivers;
app.locals.apps=data.apps;
app.locals.contributors=data.contributors;
// app.locals.chapters=content_data.chapters;
app.locals.units=track_data.units;
app.locals.books=data.books;
app.locals.trainings=data.trainings;
app.locals.ext_content=data.ext_content;
app.locals.pages=pages.pages;
app.locals.content=pages.content;

app.locals.neo4jS = {
    version: "1.9-SNAPSHOT",
    date: "2013",
    summary: "Unstable Snapshot, for resolution issue verification"
}        

function temp_update_version(current, data, current_date) {
    if (current != data.version) {
        data.version = current;
        data.date = current_date || "2013";
        data.readme = "http://blog.neo4j.org";
    }
}

app.locals({
    tutorial : {
        matrix :'node:node_auto_index(id="603")',
        neo : 'node:node_auto_index(name="Keanu Reeves")',
        trinity : 'node:node_auto_index(name="Carrie-Anne Moss")',
        me : 'node:node_auto_index(name="Me")',
        friend : 'node:node_auto_index(name="A Friend")'
    }
});

content_loading.load_github_content(app.locals,'puppet',"/neo4j-contrib/neo4j-puppet/master/README.md")
content_loading.load_github_content(app.locals,'ec2_template',"/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md")
content_loading.load_learn_content(app.locals,'java_hello_world',"/java-hello-world/index.html")
content_loading.load_learn_content(app.locals,'java_cypher',"/java-cypher/index.html")

function forward(url) {
    return function(req,res) { res.redirect(url); }
}

function route_get(url, fun) {
//  console.log(url);
    if (fun) fun.url = url;
    else console.log("Route missing for url: "+url);
    return app.get(url,fun);
}

fs.readFile("views/partials/page.ejs",function(err,buf) {
    var template=buf.toString();
	if (!fs.existsSync('views/ejs')) fs.mkdirSync('views/ejs');
//  console.log(template,err);
    for (key in app.locals.pages) {
        console.log("loading " + key);
        var page=app.locals.pages[key];
        var featured=page['featured'];
        if (featured && featured['content'] && featured['content'].match(/<%/)) {

            //console.log('use partial for', featured.type, "views/partials/" + featured.type + "/_full.ejs");
            // case 'track'            : %><% include partials/track/_full %>

            var partial = fs.readFileSync("views/partials/" + featured.type + "/_full.ejs");
            console.log(partial.toString())
            var newPartial = partial.toString().replace(new RegExp("<%- item.content %>"),
                                         featured['content']);

            var newFile=template.replace(new RegExp(" case '"+featured.type+"' +: %><% include .+? %>"),
                                         " case '"+featured.type+"' : %>"+newPartial);
            var file="ejs/"+page.path.replace(/\//g,"_");
            var fileName="views/"+file+".ejs";
            console.log("Routing to special generated page: ",file,fileName,key,page.path,page.title,featured.type);
            fs.writeFileSync(fileName,newFile);
            app.get(page.path,function(req,res) { res.render(file, { title: page.title||"" }); });
        } else {
          console.log("Default routing to pages: ",page.path,page.title)
          app.get(page.path, function(req,res) { res.render('partials/page', { title: page.title||"" }); });  
        }
    }
});

route_get('/', routes.index);
route_get('/index', routes.index_graph);
route_get('/index_graph_svg', routes.index_graph_svg);
route_get('/index_graph_svg2', routes.index_graph_svg2);
route_get('/favicon.ico', forward('/assets/ico/favicon.ico'));

route_get('/', routes.index);
route_get('/index', routes.index_graph);
route_get('/index_graph_svg', routes.index_graph_svg);
route_get('/index_graph_svg2', routes.index_graph_svg2);
route_get('/favicon.ico', forward('/assets/ico/favicon.ico'));

// route_get('/learn', routes.pages);
// route_get('/learn/concepts', routes.pages);
// route_get('/learn/intro', routes.pages);
// route_get('/learn_graph', routes.pages); 
// route_get('/learn/neo4j', routes.pages); 
// route_get('/learn/get_started', routes.pages); 
// route_get('/learn/training', routes.pages); 
// route_get('/learn/books', routes.pages); 
// route_get('/learn/apps', routes.pages); 
// route_get('/learn/licensing', routes.pages); 

// route_get('/learn/nosql', routes.pages); 
// route_get('/learn/cypher', routes.pages); 
// route_get('/develop/visualize', routes.pages); 
// route_get('/develop', routes.pages); 
// route_get('/develop/ops', routes.pages);
// route_get('/develop/heroku', routes.pages); 
// route_get('/develop/spring', routes.pages); 
// route_get('/develop/ec2', routes.pages); 
// route_get('/develop/ec2_detailed', routes.pages); 
// route_get('/develop/example_data', routes.pages); 
// route_get('/develop/spring', routes.pages); 

route_get('/develop/drivers', routes.pages);
route_get('/drivers', routes.pages);
route_get('/participate', routes.pages); 
route_get('/install', forward("/download"));
route_get('/download_thanks', routes.pages);
route_get('/subscribe_thanks', routes.pages); 
//route_get('/participate/contributors', routes.pages);
route_get('/participate/meetup_signup', routes.pages);
route_get('/participate/meetups', forward("http://neo4j.meetup.com/"));
route_get('/learn/graphdatabase', routes.pages);
route_get('/learn/try', routes.pages);
route_get('/test/d3', routes.pages);
route_get('/learn/events', forward("http://www.google.com/calendar/embed?src=neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com&ctz=America/Los_Angeles"));
//route_get('/events', routes.pages)
//route_get('/misc/beer', routes.pages)
route_get('/events', routes.events)
route_get('/participate/channels', routes.channels)
route_get('/misc/beer', routes.beer)

route_get('/marketo',function(req,res) {
    var cookie = req.cookies["_mkto_trk"];
    if (cookie && munchkin) {
        munchkin.marketo(cookie, function(id) { 
            if (id) res.send(200,""+id);
            else res.send(404,"Unknown"); 
        })
    } else {
        res.send(500);
    }
});

route_get('/meetup',function(req,res) {
    meetup.oembed(req.query['group'],req.query['event'], function(json) {
        res.send(200,json['html']);
    });
});
app.locals.events = [];
app.locals.contributors = {};


spreadsheet.events(function(items) { app.locals.events = app.locals.events.concat(items); console.log("events2",app.locals.events.length);}) 
spreadsheet.contributors(function(items) { app.locals.contributors = items; }); 
app.locals.updateChannels = function() {
    console.log("Updating Channels");
    spreadsheet.channels(function(items) { app.locals.channels = items; });
}
//app.locals.updateChannels();
//setInterval(app.locals.updateChannels,5*60*1000);


calendar.events(function(items) { app.locals.events = app.locals.events.concat(items); console.log("events2",app.locals.events.length); }) 

//console.log(app.locals.contributors);
route_get('/events.json',function(req,res) {
    var filter=req.query['filter'];
    calendar.events(function(items) {
        var data = JSON.stringify(items)
        res.send(200,data);
    }, function(item) {
        return !filter || item.title.match(filter) || item.summary.match(filter)
    })
});

// well known historic URLs redirects
route_get('/download', routes.install);
route_get('/about', routes.neo4j);
route_get('/terms', routes.terms); // terms and conditions
route_get('/privacy', routes.privacy); // privacy policy
route_get('/ruby', routes.drivers);
route_get('/community', routes.participate);
route_get('/community/feeds', routes.participate);
route_get('/resources', routes.learn);
route_get('/forums',forward("http://groups.google.com/group/neo4j"));
route_get('/nabble',forward("http://groups.google.com/group/neo4j"));
route_get('/spring', routes.spring);
route_get('/heroku', routes.heroku);
route_get('/azure', forward("http://blog.neo4j.org/2011/02/announcing-neo4j-on-windows-azure.html"));
route_get('/price-list', forward("http://www.neotechnology.com/price-list/"));
route_get('/bookstore', forward("http://www.neotechnology.com/bookstore/"));
route_get('/licensing-guide', routes.license); // node:  Neo4j licensing guide (well-known URL. redirect?)
route_get('/release-notes', routes.release_notes);
route_get('/customers', routes.customers);
route_get('/getting-started', routes.develop);
//route_get('/java', routes.java);
//route_get('/java/basics', routes.java_basics);
//route_get('/java/cypher', routes.java_cypher);


app.locals.paths={}
app.locals.paths.java = {
    java : { steps: ["learn_graph","neo4j","cypher","java_cypher","jvm_drivers","java_basics","server"],
             tags : ["java"], 
             related : [ { title : "API Javadoc", url : "http://api.neo4j.org/current/", image : "/assets/img/languages/java.jpg" }, 
                         { title : "Manual: Java Tutorial", url : "http://docs.neo4j.org/chunked/snapshot/tutorials-java-embedded.html", image : "/assets/img/languages/java.jpg" },
                         { title: "Neo4j and last.fm", author: { name: "Niklas Lindblad", twitter: "nlindblad", image: "https://d2tjdh98vh6jzp.cloudfront.net/wordpress/wp-content/uploads/498ab52745c50e9f5940f07e83bdde93.jpg" }, type:"video", url:"http://vimeo.com/39825129", image: "https://d2tjdh98vh6jzp.cloudfront.net/wordpress/wp-content/uploads/498ab52745c50e9f5940f07e83bdde93.jpg" }
                ] }
,
    
    
//  learn_graph : ["neo4j","java_basics" ],
//  neo4j : ["cypher","java_basics","server_basics"],
    jvm_drivers : { steps: ["ide","java_basics","java_cypher"] , tags: ["drivers","jvm","clojure","scala","java","groovy"]},
    java_cypher : { steps: ["cypher","jvm_drivers","ide","example_data"], tags: ["cypher","console","shell"]},
    java_basics : { steps: ["java_cypher","jvm_drivers","ide","example_data","spring","server","server_extensions"], tags: ["howto","transaction","graphdb","shutdown","index","java"] }
}
// download resources
route_get('/resources/cypher', forward('/assets/download/Neo4j_CheatSheet_v3.pdf'));

route_get('/wp-content/*', routes.resource);
route_get('/wp-includes/*', routes.resource);
route_get('/assets/download/*', routes.resource);
route_get('/img/*', routes.resource);
route_get('/highlighter/*', routes.resource);

function channelOp(params,res) {
    var options = {
      host: 'script.google.com',
      path: process.env.CHANNELS_ENDPOINT+"?"+params,
      headers: { 'Content-Length': 0 },
      method: 'POST'
    };
    console.log(options);
    var req2 = https.request(options,function(r) {
        console.log(r.statusCode);
        res.send(r.statusCode);
    });
    req2.on('error', function(e) {
        console.error(e);
    });
    req2.end();
}
app.post("/vote", function(req,res) {
    var row=req.param("row");
    console.log("voted on",row);
    channelOp("voteRow="+parseInt(row),res);
});

app.post("/add_channel", function(req,res) {
    var name=req.param("name");
    var logo=req.param("logo");
    var url=req.param("url");
    var lang=req.param("lang");
    var params="addRow="+encodeURIComponent(name)+
        "&url="+encodeURIComponent(url)+
        "&logourl="+encodeURIComponent(logo)+
        "&language="+encodeURIComponent(lang);
    console.log("add_channel",params);
    channelOp(params,res);
});

route_get('/*/', function(req, res){
    var path = req.path.substring(0,req.path.length-1);
    res.redirect(path);
});

route_get('/video/*', function(req, res){
    var path = req.path;
    var idx = path.lastIndexOf('/');
    var file = idx > -1 ? path.substr(idx+ 1,path.length) : path;
    console.log('got request for ',path,' from ',req.header('Referer'));
    res.redirect('http://watch.neo4j.org/video/'+file);
});

app.locals.next_steps = function(path,page) {
    return paths.next_steps(app.locals,routes,path,page).map( function(step) { return "<li><a href='"+step.url+"'>"+step.opts.title+"</a></li>"}).join("\n")
}

app.locals.related = function(path,page) {
    return paths.related(app.locals,path,page);
}

console.log(app.locals.related("java","java"))
console.log(geoip.region('146.52.53.114'))
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


