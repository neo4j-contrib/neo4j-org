/**
 * Module dependencies.
 */

process.on('uncaughtException', function (err) {
    console.log("Uncaught Exception", err)
    console.log(err.stack)
});

var express = require('express')
    , routes = require('./routes/routes')
    , http = require('http')
    , https = require('https')
    , path = require('path')
    , ejs = require('ejs')
    , fs = require('fs')
    , experiment = ejs.render(fs.readFileSync("views/experiment.ejs", "utf-8"))
    , munchkin = require("./helpers/munchkin")
    , data = require("./helpers/data")
    , track_data = require("./helpers/track_data")
    , markdown = require("node-markdown").Markdown
    , asciidoc = require('asciidoctorjs-npm-wrapper').Asciidoctor
    , calendar = require("./helpers/calendar")
    , contributors = require("./helpers/contributors")
    , versions = require("./helpers/versions")
    , channels = require("./helpers/channels")
    , spreadsheet = require("./helpers/spreadsheet")
    , content_loading = require("./helpers/content_loading")
    , meetup = require("./helpers/meetup")
    , versal = require("./helpers/versal")
    , page_handling = require("./helpers/page_handling")
    , paths = require("./helpers/path")
    , geoip = require("./helpers/geoip")
    , render = require("./helpers/render")
    , videos = require("./helpers/videos")
    , asset = require("./helpers/utils.js").asset
    , merge = require("./helpers/utils.js").merge
    , twitter = require("./helpers/twitter.js")
    , mylog = require("./helpers/log.js")
    , load_gist = require("./helpers/load_gist.js").load_gist
    , kissmetrics = require('kissmymetrics')
    ;


var content = require("./helpers/content")
    , pages = require("./helpers/pages");

var kmClient = new kissmetrics({ key: process.env.KM_KEY });

var app = express();

var morgan = require('morgan')
app.use(morgan('combined'))

var gist_cache = {};

// data
// app.locals.chapters=content_data.chapters;
app.locals.apps = data.apps;
app.locals.books = data.books;
app.locals.pages = pages.pages;
app.locals.content = content.content;
// app.locals.contributors = data.contributors;
app.locals.contributors = {};
app.locals.drivers = data.drivers;
app.locals.ext_content = data.ext_content;
app.locals.trainings = data.trainings;
app.locals.units = track_data.units;

versions.load(app);

app.locals.events = [];
app.locals.paths = {};
app.locals.tweets = [];

// functions
app.locals.asset = asset;
app.locals._include = render.include;
app.locals.render = ejs.render;
app.locals.merge = merge;

app.locals.theme = function () {
    return "aqua";
};

// helper functions
app.locals.link_to = function (path, inner,css) {
    if (path) {
	    var tracking = ' onclick="javascript:ga(\'send\',\'event\',\'outbound-neo4j\',\''+path+'\');" ';
		return '<a class="'+(css||"")+'" href="' +path+ '" ' + (path.match("^http") ? ' target="_blank" '+tracking : '') + ">" +inner+ "</a>";
	}
    return inner;
};

app.locals.lightbox_link = function (path, inner,css) {
    if (path) return "<a class='"+(css||"")+"' data-src='" + path + "' href='" + path + "' target='_blank' >" + inner + "</a>";
    return inner;
};

app.locals.chunk = function (arr, size) {
    var res = [];
    for (var i = 0; i < arr.length / size; i++) {
        var items = arr.slice(i * size, (i + 1) * size);
        res.push(items);
    }
    return res;
};

function findItem(key,type) {
//    console.log("findItem", key)
    if (typeof key == 'undefined') return null;
    if (typeof key == 'function') key = key();
    if (typeof key == 'object') return key;

    if (type) {
//        console.log("key",key,"type",type);
        var item=addType(app.locals[type][key],type);
        if (!item) return key;
    }
    function addType(item, type) {
        if (!item.type) item.type = type;
        return item;
    }
    if (pages.pages[key]) return addType(pages.pages[key], "page");
    if (content.content[key]) return addType(content.content[key], "content");
    if (content.content.drivers[key]) return addType(content.content.drivers[key], "driver");
    if (content.content.books[key]) return addType(content.content.books[key], "book");
    if (app.locals.contributors[key]) return addType(app.locals.contributors[key], "contributor");
    if (data.contributors[key]) return addType(data.contributors[key], "contributor");
    if (data.ext_content[key]) return addType(data.ext_content[key], "external");
    if (content.content.apps[key]) return addType(content.content.apps[key], "app");
    if (content.content.links[key]) return addType(content.content.drivers[key], "link");
    if (content.content.videos[key]) return addType(content.content.videos[key], "video");
    if (content.content.asciidoc[key]) return addType(content.content.asciidoc[key], "asciidoc");
    return key;
}
app.locals.findItem = findItem;

app.locals.resolve_authors = function (authors) {
    if (!authors) return [];
    return [].concat(authors).filter(function (author) {
        return !!author
    }).map(function (author) {
        var result = {name:"Neo4j",twitter:"neo4j"};
        if (typeof(author) == 'object') {
            result.name = author['name'];
            result.twitter = author['twitter'] || (result.name.match(/\s/) ? "neo4j" : result.name);
        } else {
            result.name = author;
            result.twitter = result.name.match(/\s/) ? "neo4j" : result.name;
        }
        if (result.name.indexOf('@') == 0) {
            result.name = result.name.substring(1);
            result.twitter = result.name;
        }
        if (app.locals.contributors[result.name]) return app.locals.contributors[result.name];
        return result;
    });
};

ejs.filters.blank = function (b) {
    return b || "";
};

ejs.filters.md = function (b) {
    return markdown(b)
};
ejs.filters.asciidoc = function (b) {
    return asciidoc.$render(b, null);
};

ejs.filters.wrap = function (content, tag) {
    return "<" + tag + ">" + content + "</" + tag + ">";
};

function dateFormat(d,time,tz) {
    var mthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var zeroPad = function(number) {
        return ("0"+number).substr(-2,2);
    }
    return dayNames[d.getDay()]+" "+zeroPad(d.getDate())+" "+mthNames[d.getMonth()]+", "+ d.getFullYear() +
        (time ? (" "+ d.getHours()+":"+ zeroPad(d.getMinutes()) + (tz ? " "+tz:"")) : "");
}

app.locals({
    tutorial: {
        matrix: 'node:node_auto_index(id="603")',
        neo: 'node:node_auto_index(name="Keanu Reeves")',
        trinity: 'node:node_auto_index(name="Carrie-Anne Moss")',
        me: 'node:node_auto_index(name="Me")',
        friend: 'node:node_auto_index(name="A Friend")'
    }
});

content_loading.load_github_content(app.locals, 'puppet', "/neo4j-contrib/neo4j-puppet/master/README.md");
content_loading.load_github_content(app.locals, 'ec2_template', "/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md");
content_loading.load_github_content(app.locals, 'java_hello_world', "/neo4j/neo4j/master/community/embedded-examples/src/docs/dev/hello-world.asciidoc");
content_loading.load_github_content(app.locals, 'java_cypher', "/neo4j/neo4j/master/community/cypher/docs/cypher-docs/src/docs/dev/java/index.asciidoc");


app.locals.next_steps = function (path, page) {
    return paths.next_steps(app.locals, routes, path, page).map(function (step) {
        return "<li><a href='" + step.url + "'>" + step.opts.title + "</a></li>"
    }).join("\n")
};
app.locals.related = function (path, page) {
    return paths.related(app.locals, path, page);
};

/////// APP-CONFIG ///////

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.enable('trust proxy');
    app.use('/public', express.static(__dirname + '/public/assets'));
    app.use(express.favicon(__dirname + '/public/assets/ico/favicon.ico', { maxAge: 2592000000 }));
    app.use(function (req, res, next) {
        res.locals.path = req.path;
        var experiment_pages = ['/', '/index', '/index_test'];
        res.locals.index_page = experiment_pages.indexOf(req.path) != -1;
        res.locals.run_experiment = app.get('env') == 'production' && res.locals.index_page;
        next();
    });
    app.use(function (req, res, next) {
        try {
            res.locals.region = geoip.region(req.ip);
            res.locals.ip_country = geoip.countryName(req.ip);
        } catch (e) {
            console.log("Error getting ip", req.ip, e);
            res.locals.region = 'US';
            res.locals.ip_country = 'United States';
        }
        next();
    });
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('X-Robots-Tag' , 'noindex' );
        res.header('Access-Control-Allow-Methods', 'GET,OPTIONS'); // 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type,ETag,Content-Length,Date,Connection,GraphGist-Url,GraphGist-Source,GraphGist-Category,GraphGist-Image,GraphGist-Description,GraphGist-Title,GraphGist-Author,GraphGist-Twitter');
        res.header('Access-Control-Expose-Headers', 'Content-Type,ETag,Content-Length,Date,Connection,GraphGist-Url,GraphGist-Source,GraphGist-Category,GraphGist-Image,GraphGist-Description,GraphGist-Title,GraphGist-Author,GraphGist-Twitter');
        next();
    });
    app.use(function(req, res, next) {
        var ref=req.query["ref"];
        if (ref && typeof(kmClient) !== "undefined") {
            var info = {host: req.host, page: req.path, ip: req.ip, cookies: ""+req.cookies, ref: ref, region:""+res.locals.region};
            try {
                kmClient.event(req.ip,"campaign_ref", info,
                    function(err){ if (err) { console.log("Error sending to kissmetrics",err,info); } });
//                console.log("logging campaign_ref to km",ref,info);
            } catch(err) {
                console.log("Error sending to kissmetrics",err,info);
            }
        }
        app.use(function(req, res, next){
           res.status(404).render('404', {title: "page not found"});
        });
        next();
    });
	app.use(routes.assets);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('value in relationships'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

videos.loadAllVideos(app.locals.pages,app.locals.content,4);

calendar.init(app,3600*1000);
channels.init(app,60*1000);
contributors.init(app,3600*1000);

function forward(url, stat) {
    if (typeof stat === 'undefined') {
      stat = 301;
    }
    return function (req, res) {
        res.redirect(stat, url);
    }
}

function route_get(url, fun) {
    if (fun) fun.url = url;
    else console.log("Route missing for url: " + url);
    return app.get(url, fun);
}

/////// ROUTING ///////
console.log('processing routing');

route_get('/', forward("http://neo4j.com/", 301));

route_get('/index_graph', routes.index_graph);
route_get('/search', routes.search);

route_get('/drivers', forward("/develop/drivers"));
route_get('/develop/drivers', forward("http://neo4j.com/contrib/",301));
route_get('/release-notes', forward("http://neo4j.com/release-notes/",301));
route_get('/participate/events/tutorials_EU', forward("/participate/events/trainings_EU"));
route_get('/participate/events/tutorials_US', forward("/participate/events/trainings_US"));
route_get('/participate/events/tutorials_DE', forward("/participate/events/trainings_DE"));
route_get('/participate/events/trainings_DE', forward("http://neo4j.com/graphacademy",301));
route_get('/participate/q_and_a', forward("http://neo4j.com/contact-us/",301));


route_get('/participate/events/tutorials', forward("/participate/events/trainings"));
route_get('/participate/events/trainings', forward("http://neo4j.com/graphacademy/",301));
route_get('/participate/events_test',    function(req, res){
    res.render('participate/events', { title: "Neo4j Events", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet" });
});
route_get('/participate/events_plain', function(req, res){
    res.render('participate/events_plain', { title: "Neo4j Events", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet"});
});
route_get('/participate/events_map', function(req, res){
    res.render('participate/events_map', { title: "Neo4j Events Map", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet"});
});

route_get('/participate/contributors', forward('http://neo4j.com/contrib/',301));
route_get('/participate/conferences', forward('/participate/events/conferences/'));
route_get('/participate/events/conferences', forward('http://neo4j.com/events/#/events?area=World&type=Conference',301));
route_get('/participate/events/conferences_DE', forward('http://neo4j.com/events/#/events?area=EU / DE&type=Conference',301));
route_get('/participate/events/conferences_EU', forward('http://neo4j.com/events/#/events?area=EU / DE&type=Conference',301));
route_get('/participate/events/conferences_US', forward('http://neo4j.com/events/#/events?area=US / CA / MX&type=Conference',301));
route_get('/participate/events/meetups', forward('http://neo4j.com/events/#/events?area=World&type=Meetup',301));
route_get('/participate/events/meetups_DE', forward('http://neo4j.com/events/#/events?area=EU / DE&type=Meetup',301));
route_get('/participate/events/meetups_EU', forward('http://neo4j.com/events/#/events?area=EU / DE&type=Meetup',301));
route_get('/participate/events/meetups_US', forward('http://neo4j.com/events/#/events?area=US / CA / MX&type=Meetup',301));
route_get('/participate/events/webinars', forward('http://neo4j.com/events/#/events?area=World&type=Webinar',301));

route_get('/learn/licensing', forward('http://neo4j.com/licensing/',301));
route_get('/learn/use_cases', forward('http://neo4j.com/use-cases/',301));
route_get('/learn/videos_graphconnect', forward('http://graphconnect.com/gc2014-sf/',301));


route_get('/trainings', forward("/participate/events/trainings"));
route_get('/tutorials', forward("/participate/events/trainings"));
route_get('/learn/events', forward("/events"));
route_get('/events', forward("http://neo4j.com/events/",301));

route_get('/subscribe_thanks', function(req, res){
    res.render('subscribe_thanks', { title: "Thanks"});
});
route_get('/participate/meetup_signup', routes.meetup_signup);
route_get('/participate/meetups', forward("/participate/events/meetups"));

route_get('/terms', forward("http://neo4j.com/terms/",301));
route_get('/privacy', forward("http://neo4j.com/privacy-policy/",301));
route_get('/release-notes', routes.release_notes);
route_get('/release-notes/faq', forward("/download/upgrade-faq"));
//route_get('/learn/online_course', routes.online_course);

// route_get('/misc/beer', routes.beer);

// well known historic URLs redirects
route_get('/getting-started', forward("/develop"));
route_get('/install', forward("/download"));
route_get('/install/linux', forward("/download/linux"));
route_get('/install/windows', forward("/download/windows"));
route_get('/tracks/java', forward("/develop/java"));
route_get('/tracks/cypher', forward("/tracks/cypher_track_start"));
route_get('/about', forward("/learn/neo4j"));
route_get('/java', forward("/develop/java"));
route_get('/ruby', forward("/develop/ruby"));

route_get('/community', forward("/participate"));
route_get('/learn/intro', forward("/learn"));
route_get('/learn/education', forward("http://neo4j.com/graphacademy/",301));
route_get('/learn/online-course', forward("http://neo4j.com/graphacademy/online-course",301));
route_get('/learn/intro-course-finish', forward("http://neo4j.com/graphacademy/online-course/intro-course-finish",301));
route_get('/learn/concepts', forward("/learn"));
route_get('/community/feeds', forward("/participate"));
route_get('/resources', forward("/learn"));
route_get('/forums', forward("http://groups.google.com/group/neo4j", 301));
route_get('/nabble', forward("http://groups.google.com/group/neo4j", 301));
route_get('/spring', forward("/develop/spring"));
route_get('/heroku', forward("/develop/heroku"));
route_get('/azure', forward("/develop/cloud/azure"));

route_get('/licensing-guide', forward("/learn/licensing"));
route_get('/learn/licensing', forward("http://neo4j.com/subscriptions/",301));

route_get('/bookstore', forward("/learn/books"));
route_get('/learn/books', forward("http://neo4j.com/books/",301));

route_get('/price-list', forward("http://www.neotechnology.com/price-list/",301));
route_get('/customers', forward("http://www.neotechnology.com/customers/",301));

page_handling.init(app,app.locals.pages);

mylog.init(app);

//twitter.load_tweets(app,10*60*1000);
//twitter.add_tweet_route("/api/tweets",app);

munchkin.add_route('/api/marketo',app);
meetup.add_route("/api/meetup",app);
versal.add_route("/api/versal",app);
calendar.add_events_route('/api/events.json', app);
calendar.add_ics_route('/api/event.ics', app);

route_get('/buch_de', forward('http://info.neotechnology.com/Neo4j20_de.html'), 301);

// download resources
route_get('/resources/cypher19', forward('http://docs.neo4j.org/refcard/1.9/', 301));
route_get('/resources/cypher20', forward('http://docs.neo4j.org/refcard/2.0/', 301));
route_get('/resources/cypher', forward('http://docs.neo4j.org/refcard/2.1/', 301));

route_get('/google2239a2d33a72ae12.html', forward("/public/google2239a2d33a72ae12.html"));
route_get('/wp-content/*', routes.resource);
route_get('/wp-includes/*', routes.resource);
route_get('/assets/download/*', routes.resource);
route_get('/img/*', routes.resource);
route_get('/highlighter/*', routes.resource);


route_get('/asciidoc', routes.asciidoc);
route_get('/js', routes.javascript);

route_get('/download', forward('http://neo4j.com/download/', 301));
route_get('/download_thanks', forward('http://neo4j.com/download/', 301));
route_get('/download/upgrade-faq', forward('http://neo4j.com/upgrade-faq/', 301));
route_get('/download/linux', forward('http://neo4j.com/download/', 301));
route_get('/download/windows', forward('http://neo4j.com/download/', 301));


route_get('/api/graphgist',function (req, res) {
    var path =  req.originalUrl.substring("/api/graphgist".length);
    load_gist(path, gist_cache, function(err, data, link) {
        if (err) {
            console.log("Error loading graphgist",path,err);
            res.send(404,"Error loading graphgist from: " + path+" "+err)
        } else {
            var item = findGist(app.locals,path);
            res.set('Content-Type', 'text/plain');
            if (item) {
                function setHeader(key,prop) {
                    if (item[prop]) res.set("GraphGist-" + key,item[prop]);
                }
                setHeader("Title","title");
                setHeader("Author","name");
                setHeader("Twitter","twitter");
                setHeader("Description","introText");
                setHeader("Image","img");
                setHeader("Category","Category");
            }
            res.set("GraphGist-Url","http://neo4j.org/graphgist"+path);
            res.set("GraphGist-Source",link);
            res.header('Access-Control-Allow-Headers', 'Content-Type,ETag,Content-Length,Date,Connection,GraphGist-Url,GraphGist-Source,GraphGist-Category,GraphGist-Image,GraphGist-Description,GraphGist-Title,GraphGist-Author,GraphGist-Twitter');

            res.send(200,data);
        }
    });
});

route_get('/*/', function (req, res) {
    var path = req.path.substring(0, req.path.length - 1);

    var i = req.url.indexOf('?');
    if (i != -1) {
        path += req.url.substr(i)
    }
    res.redirect(path);
});

route_get('/learn',               forward('http://neo4j.com/developer/get-started/', 301));
route_get('/learn_graphdb',       forward('http://neo4j.com/learn-graphdb/', 301));
route_get('/learn/online_course', forward('http://neo4j.com/graphacademy/', 301));
route_get('/console',             forward('http://console.neo4j.org/', 301));
route_get('/learn/console',       forward('http://console.neo4j.org/', 301));
route_get('/learn/graphgist',     forward('http://neo4j.com/developer/graphgist/', 301));
route_get('/learn/cypher',        forward('http://neo4j.com/developer/cypher-query-language/', 301));
route_get('/learn/graphdatabase', forward('http://neo4j.com/developer/graph-database/', 301));
route_get('/learn/neo4j',         forward('http://neo4j.com/developer/get-started/', 301));
route_get('/learn/production',    forward('http://neo4j.com/developer/in-production/', 301));
route_get('/participate',         forward('http://neo4j.com/community/', 301));
route_get('/develop/java',        forward('http://neo4j.com/developer/java/', 301));
route_get('/develop/spatial',     forward('https://github.com/neo4j-contrib/spatial', 301));
route_get('/develop',             forward('http://neo4j.com/developer/', 301));
route_get('/develop/dotnet',      forward('http://neo4j.com/developer/dotnet/', 301));
route_get('/develop/drivers',     forward('http://neo4j.com/developer/language-guides/', 301));
route_get('/develop/example_data',    forward('http://neo4j.com/developer/guide-example-data/', 301));
route_get('/develop/getting_started', forward('http://neo4j.com/developer/get-started/', 301));
route_get('/develop/import',          forward('http://neo4j.com/developer/guide-importing-data-and-etl/', 301));
route_get('/develop/javascript',      forward('http://neo4j.com/developer/javascript/', 301));
route_get('/develop/modeling',        forward('http://neo4j.com/developer/guide-data-modeling/', 301));
route_get('/develop/php',             forward('http://neo4j.com/developer/php/', 301));
route_get('/develop/python',          forward('http://neo4j.com/developer/python/', 301));
route_get('/develop/ruby',            forward('http://neo4j.com/developer/ruby/', 301));
route_get('/develop/scala',           forward('http://neo4j.com/developer/java/', 301));
route_get('/develop/clojure',         forward('http://neo4j.com/developer/java/', 301));
route_get('/develop/visualize',       forward('http://neo4j.com/developer/guide-data-visualization/', 301));
route_get('/download/other_versions', forward('http://neo4j.com/download/', 301));
route_get('/training',                forward('http://neo4j.com/graphacademy/', 301));
route_get('/develop/tools/neoclipse', forward('http://neo4j.com/developer/', 301));
route_get('/develop/tools/jdbc',      forward('http://neo4j.com/developer/', 301));
route_get('/develop/tools',           forward('http://neo4j.com/developer/', 301));
route_get('/develop/labels',          forward('http://neo4j.com/developer/', 301));
route_get('/develop/jee',             forward('http://neo4j.com/developer/', 301));
route_get('/develop/heroku',          forward('http://neo4j.com/developer/', 301));
route_get('/develop/cloud',           forward('http://neo4j.com/developer/', 301));
route_get('/develop/cloud/azure',     forward('http://neo4j.com/developer/', 301));
route_get('/develop/linked_data',     forward('http://neo4j.com/developer/', 301));
route_get('/misc/beer',               forward('http://neo4j.com/developer/', 301));
route_get('/java/java_basics',        forward('http://neo4j.com/developer/', 301));
route_get('/learn/try',               forward('http://neo4j.com/developer/', 301));
route_get('/learn/apps',              forward('http://neo4j.com/developer/', 301));
route_get('/learn/nosql',             forward('http://neo4j.com/developer/', 301));
route_get('/learn/videos',            forward('http://neo4j.com/developer/', 301));
route_get('/learn/videos_interview',  forward('http://neo4j.com/developer/', 301));
route_get('/develop/ec2',             forward('http://neo4j.com/developer/', 301));
route_get('/particpate/channels',     forward('http://neo4j.com/developer/', 301));
route_get('/tracks/neo4j_server',     forward('http://neo4j.com/developer/', 301));
route_get('/develop/spring',          forward('http://neo4j.com/developer/', 301));
route_get('/download/maven',          forward('http://neo4j.com/developer/', 301));
route_get('/develop/shell',           forward('http://neo4j.com/docs/stable/shell.html', 301));
route_get('/develop/import/shell',    forward('http://neo4j.com/docs/stable/shell.html', 301));
route_get('/learn/graphgist_challenge', forward('http://neo4j.com/blog/graphgist-winter-challenge/', 301));
route_get('/misc/music',              forward('http://neo4j.com/developer/', 301));
route_get('/java/server_plugins',     forward('http://neo4j.com/developer/', 301));
route_get('/learn/scientfic',         forward('http://neo4j.com/developer/', 301));
route_get('/graphgist',               forward('http://neo4j.com/graphgists/', 301));
route_get('/graphgist/',               forward('http://neo4j.com/graphgists/', 301));
route_get('/java/jvm',                forward('http://neo4j.com/developer/', 301));
route_get('/develop/ec2_manual',      forward('http://neo4j.com/developer/', 301));
route_get('/tracks/cypher_track_start', forward('http://neo4j.com/developer/', 301));
route_get('/learn/videos_webinar',     forward('http://neo4j.com/developer/', 301));

console.log('finished routing');

app.use(function (req, res, next) {
    if ('/robots.txt' == req.url) {
        res.type('text/plain')
        res.send("User-agent: *\nAllow: *");
    } else {
        next();
    }
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
