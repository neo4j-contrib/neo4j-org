
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , https = require('https')
  , path = require('path')
  , ejs = require('ejs')
  , fs = require('fs')
  , experiment = ejs.render(fs.readFileSync("views/experiment.ejs", "utf-8"))  
  , forwarder=require("./helpers/forwarder")
  , munchkin=require("./helpers/munchkin")
  , data=require("./helpers/data")
  , markdown = require("node-markdown").Markdown
  , calendar = require("./helpers/calendar")
  , spreadsheet = require("./helpers/spreadsheet")
  , content = require("./helpers/content")
  , meetup =  require("./helpers/meetup")
  , paths =  require("./helpers/path")

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

https.get({host: "raw.github.com", path: "/neo4j/current-versions/master/versions.json"},
    function(res) {
        res.on("data", function(data) {
            app.locals.versions = JSON.parse(data) || {};
            console.log(app.locals.versions);
            temp_update_version(app.locals.versions.stable,app.locals.neo4jGA,app.locals.versions.stable_date);
            temp_update_version(app.locals.versions.milestone,app.locals.neo4j,app.locals.versions.milestone_date);
            temp_update_version(app.locals.versions.snapshot,app.locals.neo4jS);
        })
    })

forwarder.add_console_forward(app,express,http);

app.locals.content = {}

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
//  app.use(express.favicon());
  app.use(function(req, res, next){
      res.locals.path = req.path;
      res.locals.index_page = ['/','/index','/index_graph','/index_graph_svg'].indexOf(req.path) != -1
      res.locals.run_experiment = app.get('env') == 'production' && res.locals.index_page
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
app.locals.books=data.books;
app.locals.trainings=data.trainings;
app.locals.ext_content=data.ext_content;

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

content.load_github_content(app.locals,'puppet',"/neo4j-contrib/neo4j-puppet/master/README.md")
content.load_github_content(app.locals,'ec2_template',"/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md")
content.load_learn_content(app.locals,'java_hello_world',"/java-hello-world.html")
content.load_learn_content(app.locals,'java_cypher',"/java-cypher.html")

function forward(url) {
    return function(req,res) { res.redirect(url); }
}

/**
 * Page types:
 * - node: content about a single topic
 * - path: guide to related tracks of nodes
 * - graph: collection of arbitrarily connected nodes
 */

function route_get(url, fun) {
//  console.log(url);
    if (fun) fun.url = url;
    else console.log("Route missing for url: "+url);
    return app.get(url,fun);
}
 
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

route_get('/learn', routes.learn);
route_get('/learn_graph', routes.learn_graph); 
route_get('/learn/neo4j', routes.neo4j); 
route_get('/learn/training', routes.training); 
route_get('/learn/books', routes.books); 
route_get('/learn/apps', routes.apps); 
route_get('/learn/licensing', routes.license); 

route_get('/learn/nosql', routes.nosql); 
route_get('/learn/cypher', routes.cypher); 
route_get('/develop/visualize', routes.visualize); 
route_get('/develop', routes.develop); 
route_get('/develop/heroku', routes.heroku); 
route_get('/develop/spring', routes.spring); 
route_get('/develop/ec2', routes.ec2); 
route_get('/develop/ec2_detailed', routes.ec2_detailed); 
route_get('/develop/example_data', routes.example_data); 
route_get('/develop/spring', routes.spring); 

route_get('/develop/drivers', routes.drivers);
route_get('/drivers', routes.drivers);
route_get('/participate', routes.participate); 
route_get('/install', routes.install);
route_get('/download_thanks', routes.download_thanks);
route_get('/subscribe_thanks', routes.subscribe_thanks); 
route_get('/participate/contributors', routes.contributors);
route_get('/participate/meetup_signup', routes.meetup_signup);
route_get('/participate/meetups', forward("http://neo4j.meetup.com/"));
route_get('/learn/graphdatabase', routes.graphdb);
route_get('/learn/try', routes.try);
route_get('/test/d3', routes.d3);
route_get('/learn/events', forward("http://www.google.com/calendar/embed?src=neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com&ctz=America/Los_Angeles"));
route_get('/events', routes.events)
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

spreadsheet.events(function(items) { app.locals.events = app.locals.events.concat(items); console.log("events2",app.locals.events.length);}) 
calendar.events(function(items) { app.locals.events = app.locals.events.concat(items); console.log("events2",app.locals.events.length); }) 

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
route_get('/java', routes.java);
route_get('/java/basics', routes.java_basics);
route_get('/java/cypher', routes.java_cypher);


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
//route_get('/assets/download/*', routes.resource);
route_get('/img/*', routes.resource);
route_get('/highlighter/*', routes.resource);
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
// console.log(app.locals.next_steps("java","java"))

app.locals.related = function(path,page) {
    return paths.related(app.locals,path,page);
}

console.log(app.locals.related("java","java"))

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


