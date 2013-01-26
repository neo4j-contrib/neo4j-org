
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
  , rssparser = require('rssparser')

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
app.locals.content2 = {}
function load_github_content(name, path, host) {
    if (!host) host="raw.github.com";
    https.get({host: host, path: path},
        function(res) {
            res.on("data", function(data) {
                app.locals.content[name] = data.toString();            
            })
        })
}
var doc_url = "http://docs.neo4j.org/chunked/milestone/"
function load_learn_content(name, path, host) {
    var add_attribs='target="_blank" class="manual" ';
    if (!host) host="learn.neo4j.org";
    http.get({host: host, path: path},
        function(res) {
            res.on("data", function(data) {
                var content = data.toString();
                content = content.replace(/<\/?(html|body|!DOCTYPE).*?>/g,"");
                content = content.replace(/-neo4j-version/g,app.locals.neo4j.version);
                content = content.replace(/<!\[CDATA\[|\]\]>/g,"");
                
                content = content.replace(/((?:href|src)\s*=\s*")([^"]+)/g, function (match, group1, group2) {
                    console.log(match,group1,group2)
                    var fixed=group1+doc_url+group2;
                    if (group2.match("^http")) fixed=match;
                    else if (group2[0] == "#") fixed=group1+doc_url+group2.substr(1)+".html";
                    return add_attribs+fixed;
                })
                
                if (app.locals.content2[name]) {
                    var tmp = app.locals.content2[name];
                    content = tmp + content;
                }
                app.locals.content2[name] = content;
            })
        })
}

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
app.locals.books=data.books;

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


load_github_content('puppet',"/neo4j-contrib/neo4j-puppet/master/README.md")
load_github_content('ec2_template',"/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md")
load_learn_content('java_embedded_tutorial',"/java-course.html")


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

route_get('/learn', routes.learn); // path: concepts, best practices, operations
route_get('/learn_graph', routes.learn_graph); // path: concepts, best practices, operations
route_get('/learn/neo4j', routes.neo4j); // node:  about Neo4j
route_get('/learn/books', routes.books); // node: showcase of books about Neo4j and Graph Theory
route_get('/learn/apps', routes.apps); // graph:  showcase of apps built with Neo4j
route_get('/learn/licensing', routes.license); // node:  Neo4j editions and licensing guide (categorized URL)
// route_get('/learn/propertygraph', routes.propertygraph); // node:  explanation of property graph
route_get('/learn/nosql', routes.nosql); // node:  compare to other databases
route_get('/learn/cypher', routes.cypher); // node:  compare to other databases
route_get('/develop/visualize', routes.visualize); // node:  compare to other databases
route_get('/develop', routes.develop); // path: development guides in featured languages
route_get('/develop/heroku', routes.heroku); // path: heroku deployment
route_get('/develop/spring', routes.spring); // path: spring data neo4j landing page
route_get('/develop/ec2', routes.ec2); // path: development guides in featured languages
route_get('/develop/ec2_detailed', routes.ec2_detailed); // path: development guides in featured languages
route_get('/develop/example_data', routes.example_data); // path: example data sets
route_get('/develop/spring', routes.spring); // path: development guides in featured languages
route_get('/develop/drivers', routes.drivers);
route_get('/drivers', routes.drivers);
route_get('/participate', routes.participate); 
route_get('/install', routes.install);
route_get('/download_thanks', routes.download_thanks);
route_get('/subscribe_thanks', routes.subscribe_thanks); 
route_get('/participate/contributors', routes.contributors);
route_get('/learn/graphdatabase', routes.graphdb);
route_get('/learn/try', routes.try);
route_get('/test/d3', routes.d3);
route_get('/learn/events', forward("http://www.google.com/calendar/embed?src=neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com&ctz=America/Los_Angeles"));
route_get('/events', routes.events)


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


route_get('/meetup',function(req,res) {
    meetup(req.query['group'],req.query['event'], function(json) {
        res.send(200,json['html']);
    });
});

function events(fun, filter) {
    var calendarUrl='http://www.google.com/calendar/feeds/neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&max-results=30&futureevents=true&hl=en';
    rssparser.parseURL(calendarUrl, { headers: {'Accept-Language':'en'}}, function(err, out){
        function event_prop(item,name,regexp) {
            var match = item.summary.match(regexp);
            item[name]=match == null ? '' : match[1];
        }
        var items=out.items.map(function(item) {
            event_prop(item,'date',/When: (.+?)(\n|<br *\/>)/)
            event_prop(item,'status',/Event Status: (.+?)(\n|<br *\/>)/)
            event_prop(item,'location',/Where: (.+?)(\n|<br *\/>)/)
            event_prop(item,'description',/Event Description: ([\s\S]+)$/)
            event_prop(item,'page',/Event Description: <a +href="(.+?)".*>.+?<\/a>/)
            event_prop(item,'page_text',/Event Description: <a +href=".+?".*>(.+?)<\/a>/)
			item.description = item.description.replace(/^<a +href=".+?".*>.+?<\/a> */,"");
            if (item.page && item.page.match(/http:\/\/www.google.com\/url\?q=/)) {
              var url=item.page.replace(/http:\/\/www.google.com\/url\?q=/,"")
              url=decodeURIComponent(url);
			  url=url.replace(/\/&.*$/,"");
              item.page=url;
            }
            var meetup=item.page.match(/http:\/\/(?:www\.)?meetup.com\/(.+)(?:\/events\/(\d+))/);
            if (meetup){
				item.meetup_group=meetup[1];
				item.meetup_event=meetup[2];
			}
            console.log(item)
            return item;
        });
        if (filter) fun(items.filter(filter));
        else fun(items)
    });
}

events(function(items) { app.locals.events = items; }) // todo refresh

route_get('/events.json',function(req,res) {
    var filter=req.query['filter'];
    events(function(items) {
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


app.locals.paths={}
app.locals.paths.java = {
    java : ["learn_graph","neo4j","cypher","jvm_drivers","java_basics","server"],
//  learn_graph : ["neo4j","java_basics" ],
//  neo4j : ["cypher","java_basics","server_basics"],
    jvm_drivers : ["ide","java_basics","java_cypher"],
    java_basics : ["java_cypher","jvm_drivers","ide","example_data","spring","server","server_extensions"]
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

function next_steps(path, page) {
    var pages = app.locals.paths[path][page];
    var urls=[];
    var mock = { render : function (page,opts) { var dest=urls[urls.length-1];dest.page=page;dest.opts=opts; }, 
                     url: function (url) {urls.push({url:url});return this;}
               }
    for (var i=0;i<pages.length;i++) {
        var page=pages[i];
        var route = routes[page];
//      console.log(page,route ? route.url : "undefined");
        if (route) {
            route(null, mock.url(route.url))
        }
    }
    return urls;
//  console.log(urls)
}


app.locals.next_steps = function(path,page) {
    return next_steps(path,page).map( function(step) { return "<li><a href='"+step.url+"'>"+step.opts.title+"</a></li>"}).join("\n")
}
console.log(app.locals.next_steps("java","java"))

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


