
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('value in relationships'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var rnd = function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

 var themes = ["aqua"];
//var themes = ["default","quartum","aqua"];
app.locals.theme = function() {
  return themes[rnd(0,themes.length - 1)];
}
 
app.locals({
  neo4j: {
    version: "1.9.M01",
    date: "Oct 26, 2012",
    summary: "Early access to self-managed HA, for simplified ops.",
    readme: "http://blog.neo4j.org/2012/10/neo4j-19m01-self-managed-ha.html"
  } 
});

app.locals({
  neo4jGA: {
    version: "1.8",
    date: "Oct 2, 2012",
    summary: "General Availability",
    readme: "http://blog.neo4j.org/2012/10/neo4j-18-release-fluent-graph-literacy.html"
  } 
});
app.locals({
  neo4jS: {
    version: "1.9-SNAPSHOT",
    date: "Nov, 2012",
    summary: "Snapshot"
  } 
});

/**
 * Page types:
 * - node: content about a single topic
 * - path: guide to related tracks of nodes
 * - graph: collection of arbitrarily connected nodes
 */


app.get('/', routes.index);

app.get('/learn', routes.learn); // path: concepts, best practices, operations
app.get('/learn/neo4j', routes.neo4j); // node:  about Neo4j
app.get('/learn/apps', routes.apps); // graph:  showcase of apps built with Neo4j
app.get('/learn/licensing', routes.license); // node:  Neo4j editions and licensing guide (categorized URL)
app.get('/learn/propertygraph', routes.propertygraph); // node:  explanation of property graph
app.get('/learn/nosql', routes.nosql); // node:  compare to other databases
app.get('/learn/cypher', routes.cypher); // node:  compare to other databases
app.get('/create/visualize', routes.visualize); // node:  compare to other databases
app.get('/create', routes.create); // path: development guides in featured languages
app.get('/create/install', routes.install); // path: development guides in featured languages
app.get('/create/heroku', routes.heroku); // path: development guides in featured languages
app.get('/create/spring', routes.spring); // path: development guides in featured languages
app.get('/create/ec2', routes.ec2); // path: development guides in featured languages
app.get('/create/example_data', routes.example_data); // path: development guides in featured languages
app.get('/create/spring', routes.spring); // path: development guides in featured languages
app.get('/create/drivers', routes.drivers); // graph: language drivers and frameworks
app.get('/participate', routes.participate); // graph: language drivers and frameworks
app.get('/download', routes.download); //  download Neo4j
app.get('/download_thanks', routes.download_thanks); //  download thanks Neo4j
app.get('/participate/contributors', routes.contributors);
app.get('/learn/graphdatabase', routes.graphdb);
app.get('/learn/try', routes["try"]);
app.get('/d3', routes["d3"]);
app.get('/test', routes["test"]);

// well known historic URLs redicrects
app.get('/licensing-guide', routes.license); // node:  Neo4j licensing guide (well-known URL. redirect?)


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


