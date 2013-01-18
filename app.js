
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
function load_github_content(name, path, host) {
    if (!host) host="raw.github.com";
    https.get({host: host, path: path},
        function(res) {
            res.on("data", function(data) {
                app.locals.content[name] = data.toString();            
            })
        })
    
}
load_github_content('puppet',"/neo4j-contrib/neo4j-puppet/master/README.md")
load_github_content('ec2_template',"/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md")

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

app.configure('development', function(){
  app.use(express.errorHandler());
});

var rnd = function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

 var themes = ["aqua"];
//var themes = ["default","quartum","aqua"];
app.locals.theme = function() {
  return themes[rnd(0,themes.length - 1)];
}
app.locals.drivers=data.drivers;
app.locals.apps=data.apps;
app.locals.contributors=data.contributors;

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


function forward(url) {
    return function(req,res) { res.redirect(url); }
}

/**
 * Page types:
 * - node: content about a single topic
 * - path: guide to related tracks of nodes
 * - graph: collection of arbitrarily connected nodes
 */


app.get('/', routes.index);
app.get('/index', routes.index_graph);
app.get('/index_graph_svg', routes.index_graph_svg);
app.get('/index_graph_svg2', routes.index_graph_svg2);
app.get('/favicon.ico', forward('/assets/ico/favicon.ico'));

app.get('/learn', routes.learn); // path: concepts, best practices, operations
app.get('/learn_graph', routes.learn_graph); // path: concepts, best practices, operations
app.get('/learn/neo4j', routes.neo4j); // node:  about Neo4j
app.get('/learn/apps', routes.apps); // graph:  showcase of apps built with Neo4j
app.get('/learn/licensing', routes.license); // node:  Neo4j editions and licensing guide (categorized URL)
app.get('/learn/propertygraph', routes.propertygraph); // node:  explanation of property graph
app.get('/learn/nosql', routes.nosql); // node:  compare to other databases
app.get('/learn/cypher', routes.cypher); // node:  compare to other databases
app.get('/develop/visualize', routes.visualize); // node:  compare to other databases
app.get('/develop', routes.develop); // path: development guides in featured languages
app.get('/develop/heroku', routes.heroku); // path: heroku deployment
app.get('/develop/spring', routes.spring); // path: spring data neo4j landing page
app.get('/develop/ec2', routes.ec2); // path: development guides in featured languages
app.get('/develop/ec2_detailed', routes.ec2_detailed); // path: development guides in featured languages
app.get('/develop/example_data', routes.example_data); // path: example data sets
app.get('/develop/spring', routes.spring); // path: development guides in featured languages
app.get('/develop/drivers', routes.drivers);
app.get('/drivers', routes.drivers);
app.get('/participate', routes.participate); 
app.get('/install', routes.install);
app.get('/download_thanks', routes.download_thanks);
app.get('/subscribe_thanks', routes.subscribe_thanks); 
app.get('/participate/contributors', routes.contributors);
app.get('/learn/graphdatabase', routes.graphdb);
app.get('/learn/try', routes.try);
app.get('/test/d3', routes.d3);
app.get('/learn/events', forward("http://www.google.com/calendar/embed?src=neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com&ctz=America/Los_Angeles"));

app.get('/marketo',function(req,res) {
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

// well known historic URLs redirects
app.get('/download', routes.install);
app.get('/about', routes.neo4j);
app.get('/terms', routes.terms); // terms and conditions
app.get('/privacy', routes.privacy); // privacy policy
app.get('/ruby', routes.drivers);
app.get('/community', routes.participate);
app.get('/community/feeds', routes.participate);
app.get('/resources', routes.learn);
app.get('/forums',forward("http://groups.google.com/group/neo4j"));
app.get('/nabble',forward("http://groups.google.com/group/neo4j"));
app.get('/spring', routes.spring);
app.get('/heroku', routes.heroku);
app.get('/azure', forward("http://blog.neo4j.org/2011/02/announcing-neo4j-on-windows-azure.html"));
app.get('/price-list', forward("http://www.neotechnology.com/price-list/"));
app.get('/bookstore', forward("http://www.neotechnology.com/bookstore/"));
app.get('/licensing-guide', routes.license); // node:  Neo4j licensing guide (well-known URL. redirect?)
app.get('/release-notes', routes.release_notes);
app.get('/customers', routes.customers);
app.get('/getting-started', routes.develop);
app.get('/java', routes.java);


// download resources
app.get('/resources/cypher', forward('/assets/download/Neo4j_CheatSheet_v3.pdf'));

app.get('/wp-content/*', routes.resource);
app.get('/wp-includes/*', routes.resource);
//app.get('/assets/download/*', routes.resource);
app.get('/img/*', routes.resource);
app.get('/highlighter/*', routes.resource);
app.get('/video/*', function(req, res){
    var path = req.path;
    var idx = path.lastIndexOf('/');
    var file = idx > -1 ? path.substr(idx+ 1,path.length) : path;
    console.log('got request for ',path,' from ',req.header('Referer'));
    res.redirect('http://watch.neo4j.org/video/'+file);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


