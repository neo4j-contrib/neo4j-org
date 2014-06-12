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
    , forwarder = require("./helpers/forwarder")
    , munchkin = require("./helpers/munchkin")
    , data = require("./helpers/data")
    , track_data = require("./helpers/track_data")
    , markdown = require("node-markdown").Markdown
    , asciidoc = require('asciidoctorjs-npm-wrapper').Asciidoctor
    , calendar = require("./helpers/calendar")
    , contributors = require("./helpers/contributors")
    , graphgists = require("./helpers/graphgists")
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

// data
// app.locals.chapters=content_data.chapters;
app.locals.apps = data.apps;
app.locals.books = data.books;
app.locals.pages = pages.pages;
app.locals.content = content.content;
// app.locals.contributors = data.contributors;
app.locals.contributors = {};
app.locals.graphgists = {};
app.locals.articles = content.content.articles;
app.locals.graphgist_files = { content : {}};
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

function get_graphgist(item,cb) {
    function resolveGraphGistUrl(url) {
        // http://gist.neo4j.org/?8173017
        // http://gist.neo4j.org/?github-HazardJ%2Fgists%2F%2FDoc_Source_Graph.adoc
        // http://gist.neo4j.org/?dropbox-14493611%2Fmovie_recommendation.adoc
        var decoded = decodeURIComponent(url);
        var match = decoded.match(/^http:\/\/gist.neo4j.org\/\?(.+)/);
        if (match) {
            var original = match[1];
            if (original.match(/^[0-9a-f]{5,}/i)) {
                return "https://gist.github.com/" + original;
            }
            if (original.match(/github-/i)) {
                return "https://github.com/" + original.substring("github-".length);
            }
            if (original.match(/dropbox-/i)) {
                return "https://dl.dropboxusercontent.com/u/" + original.substring("dropbox-".length);
            }
        }
        return decoded;
    }
    var original = resolveGraphGistUrl(item.url);
    var content = app.locals.graphgist_files.content[item.id];

    console.log("resolveGraphGistUrl2", original, content);
    if (!content || content == "Content not found") {
        // todo dropbox
        // o
        // gist
        // gist
        // gist
        content_loading.load_content(app.locals.graphgist_files, item.id, original,cb);
    } else {
        cb(null, content, item.id, original);
    }
}

app.locals.get_graphgist = get_graphgist;

app.locals.theme = function () {
    return "aqua";
};

// helper functions
app.locals.link_to = function (path, inner,css) {
    if (path) {
	    // var tracking = ' onclick="javascript:_gaq.push([\'_trackEvent\',\'outbound-article\',\''+path+'\']);"';
	    var tracking = ' onclick="javascript:_gaq.push([\'_trackEvent\',\'outbound-neo4j\',\''+path+'\']);" ';
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
    console.log("findItem", key)
    if (typeof key == 'undefined') return null;
    if (typeof key == 'function') key = key();
    if (typeof key == 'object') return key;
    var parts = key.match(/^\/c\/(.+?)\/(.+?)$/);
    if (parts) {
        //TODO: this is not working
        console.log('findItem path', key, 'type: ',typeof key, parts);
        key = parts[2];
        type = parts[1];
    }
    if (type) {
        var item=addType(app.locals[type]?app.locals[type][key]:content.content[type][key],type.replace(/s$/,""));
        console.log("key",key,"type",type, item);
        if (!item) return key;
    }
    function addType(item, type) {
        console.log('addType', item, type);
        if (!item.type) item.type = type;
        return item;
    }
    if (pages.pages[key]) return addType(pages.pages[key], "page");
    if (content.content[key]) return addType(content.content[key], "content");
    if (content.content.drivers[key]) return addType(content.content.drivers[key], "driver");
    if (content.content.books[key]) return addType(content.content.books[key], "book");
    if (content.content.articles[key]) return addType(content.content.articles[key], "article");
    if (app.locals.contributors[key]) return addType(app.locals.contributors[key], "contributor");
    if (app.locals.graphgists[key]) return addType(app.locals.graphgists[key], "graphgist");
    if (data.contributors[key]) return addType(data.contributors[key], "contributor");
    if (data.ext_content[key]) return addType(data.ext_content[key], "external");
    if (content.content.apps[key]) return addType(content.content.apps[key], "app");
    if (content.content.links[key]) return addType(content.content.links[key], "link");
    if (content.content.videos[key]) return addType(content.content.videos[key], "video");
    if (content.content.asciidoc[key]) return addType(content.content.asciidoc[key], "asciidoc");
    if (app.locals.graphgists[key]) return addType(app.locals.graphgists[key], "graphgist");
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
//    var timezones = { PT : -8, PST:-8, "PDT":-7, EST: -5, ET: -4,"EDT":-4 ,MT: -7, MST: -7, "MDT":-6, CT:-6,CST:-6, CDT:-5, CEST: +2, CET: 1,BST:1,AEST:1,IST:5.5}
    var zeroPad = function(number) {
        return ("0"+number).substr(-2,2);
    }
    /*
    var offset = 0;
    if (time && tz) {
        if (tz.match(/^GMT[+-]\d{1,2}$/)) {
            offset = parseFloat(tz.replace(/^(GMT[+-])(\d{1,2})$/,"$2"));
        } else
        if (tz.match(/^GMT[+-]\d{3,4}$/)) {
            offset = parseFloat(tz.replace(/^(GMT[+-])(\d{1,2})(\d{2})$/,"$2.$3"));
        } else if (timezones[tz]) {
            offset = timezones[tz];
        }
        d=new Date(d.getTime()+offset*3600*1000);
    }
*/
    return dayNames[d.getDay()]+" "+zeroPad(d.getDate())+" "+mthNames[d.getMonth()]+", "+ d.getFullYear() +
        (time ? (" "+ d.getHours()+":"+ zeroPad(d.getMinutes()) + (tz ? " "+tz:"")) : "");
}

ejs.filters.formatDate = function(b) {
    return  dateFormat(b);
}
ejs.filters.formatDateTime = function(b,tz) {
    return  dateFormat(b,true,tz);
}

// todo move somewhere else
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
content_loading.load_github_content(app.locals, 'graphgist_syntax', "neo4j-contrib/graphgist/master/gists/syntax.adoc");
content_loading.load_github_content(app.locals, 'ec2_template', "/neo4j-contrib/neo4j-puppet/master/README.CLOUDFORMATION.md");
// https://raw.githubusercontent.com/neo4j/neo4j/master/community/embedded-examples/src/docs/dev/hello-world.asciidoc
content_loading.load_github_content(app.locals, 'java_hello_world', "/neo4j/neo4j/master/community/embedded-examples/src/docs/dev/hello-world.asciidoc");
//https://raw.githubusercontent.com/neo4j/neo4j/master/community/cypher/docs/cypher-docs/src/docs/dev/java/index.asciidoc
content_loading.load_github_content(app.locals, 'java_cypher', "/neo4j/neo4j/master/community/cypher/docs/cypher-docs/src/docs/dev/java/index.asciidoc");


app.locals.next_steps = function (path, page) {
    return paths.next_steps(app.locals, routes, path, page).map(function (step) {
        return "<li><a href='" + step.url + "'>" + step.opts.title + "</a></li>"
    }).join("\n")
};
app.locals.related = function (path, page) {
    return paths.related(app.locals, path, page);
};

forwarder.add_console_forward(app, express, http);
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
        res.header('Access-Control-Allow-Methods', 'GET'); // 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
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
graphgists.init(app,3600*1000);

function forward(url) {
    return function (req, res) {
        res.redirect(url);
    }
}

function route_get(url, fun) {
    if (fun) fun.url = url;
    else console.log("Route missing for url: " + url);
    return app.get(url, fun);
}

/////// ROUTING ///////

route_get('/*/', function (req, res) {
    var path = req.path.substring(0, req.path.length - 1);

	var i = req.url.indexOf('?');
	if (i != -1) {
		path += req.url.substr(i)	
	}
    res.redirect(path);
});

//route_get('/', forward("/index"));
app.get("/", function (req, res) {
    var page = app.locals.pages["index"];
    var params = merge({ path:page.path, title:page.title || "", locals:merge(app.locals,res.locals) });
    console.log("merge",Object.keys(params));
    res.render("partials/page", params);
});

route_get('/index_graph', routes.index_graph);
route_get('/search', routes.search);

route_get('/drivers', forward("/develop/drivers"));
route_get('/release-notes', forward("http://neo4j.com/release-notes/"));
route_get('/participate/events/tutorials_EU', forward("/participate/events/trainings_EU"));
route_get('/participate/events/tutorials_US', forward("/participate/events/trainings_US"));
route_get('/participate/events/tutorials_DE', forward("/participate/events/trainings_DE"));

route_get('/participate/events/tutorials', forward("/participate/events/trainings"));
route_get('/participate/events_test',    function(req, res){
    res.render('participate/events', { title: "Neo4j Events", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet" });
});
route_get('/participate/events_plain', function(req, res){
    res.render('participate/events_plain', { title: "Neo4j Events", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet"});
});
route_get('/participate/events_map', function(req, res){
    res.render('participate/events_map', { title: "Neo4j Events Map", requestedType:req.query["type"],requestedSource:req.query["source"]||"spreadsheet"});
});
route_get('/trainings', forward("/participate/events/trainings"));
route_get('/tutorials', forward("/participate/events/trainings"));
route_get('/learn/events', forward("/events"));
route_get('/events', forward("http://neo4j.com/events/"));

route_get('/download_thanks', routes.pages);
route_get('/subscribe_thanks', function(req, res){
    res.render('subscribe_thanks', { title: "Thanks"});
});
route_get('/participate/meetup_signup', routes.meetup_signup);
route_get('/participate/meetups', forward("/participate/events/meetups"));

route_get('/terms', routes.terms); // terms and conditions
route_get('/privacy', routes.privacy); // privacy policy
route_get('/release-notes', routes.release_notes);
route_get('/release-notes/faq', forward("/download/upgrade-faq"));
route_get('/download/upgrade-faq', routes.upgrade_faq);
route_get('/learn/education', routes.online_course);
route_get('/learn/online_course', routes.online_course);

// route_get('/misc/beer', routes.beer);

// well known historic URLs redirects
route_get('/getting-started', forward("/develop"));
route_get('/install', forward("/download"));
route_get('/install/linux', forward("/download/linux"));
route_get('/install/windows', forward("/download/windows"));
route_get('/tracks/java', forward("/develop/java"));
route_get('/tracks/cypher', forward("/tracks/cypher_track_start"));
//route_get('/learn/graphgist', forward("/learn/graphgist_challenge"));
route_get('/about', forward("/learn/neo4j"));
route_get('/java', forward("/develop/java"));
route_get('/ruby', forward("/develop/ruby"));

route_get('/community', forward("/participate"));
route_get('/learn/intro', forward("/learn"));
route_get('/learn/concepts', forward("/learn"));
route_get('/community/feeds', forward("/participate"));
route_get('/resources', forward("/learn"));
route_get('/forums', forward("http://groups.google.com/group/neo4j"));
route_get('/nabble', forward("http://groups.google.com/group/neo4j"));
route_get('/spring', forward("/develop/spring"));
route_get('/heroku', forward("/develop/heroku"));
route_get('/azure', forward("/develop/cloud/azure"));

route_get('/licensing-guide', forward("/learn/licensing"));
route_get('/learn/licensing', forward("http://neo4j.com/subscriptions/"));

route_get('/bookstore', forward("/learn/books"));
route_get('/learn/books', forward("http://neo4j.com/books/"));

route_get('/price-list', forward("http://www.neotechnology.com/price-list/"));
route_get('/customers', forward("http://www.neotechnology.com/customers/"));

page_handling.init(app,app.locals.pages);

mylog.init(app);

twitter.load_tweets(app,10*60*1000);
twitter.add_tweet_route("/api/tweets",app);

munchkin.add_route('/api/marketo',app);
meetup.add_route("/api/meetup",app);
versal.add_route("/api/versal",app);
calendar.add_events_route('/api/events.json', app);
calendar.add_ics_route('/api/event.ics', app);

route_get('/buch_de', forward('http://info.neotechnology.com/Neo4j20_de.html'));

// download resources
route_get('/resources/cypher19', forward('http://docs.neo4j.org/refcard/1.9/'));
route_get('/resources/cypher20', forward('http://docs.neo4j.org/refcard/2.0/'));
route_get('/resources/cypher', forward('http://docs.neo4j.org/refcard/2.1/'));

route_get('/google2239a2d33a72ae12.html', forward("/public/google2239a2d33a72ae12.html"));
route_get('/wp-content/*', routes.resource);
route_get('/wp-includes/*', routes.resource);
route_get('/assets/download/*', routes.resource);
route_get('/img/*', routes.resource);
route_get('/highlighter/*', routes.resource);


route_get('/asciidoc', routes.asciidoc);
route_get('/js', routes.javascript);

route_get('/graphgist', function (req, res) {
    var path =  req.originalUrl.substring("/graphgist".length);
    load_gist(path, function(err, data) {
        var item = {};
        if (err) {
            console.log("Error loading graphgist",path,err);
        } else {
            for (var k in app.locals.graphgists) {
                var gist = app.locals.graphgists[k];
                if (gist.url == req.originalUrl) {
                    item = gist;
                }
            }
        }
        res.render("participate/graphgist",{ path: path, title:"Neo4j GraphGist "+(item['title']?item.title:""), category:"Participate", data:data, req:req, item:item});
    });
});

route_get('/e/:type/:item', function (req, res) {
    var item = req.param("item");
    var type = req.param("type");
    var content = findItem(item, type);
    load_gist(content.url, function(err, data) {
        var item = {};
        console.log('loaded graphgist', data);
        content.content = data;

        var params = merge({ page:content, path:req.path, title:content.title || "", locals:merge(app.locals,res.locals) });
        res.render("partials/default/_page", params);
    });
});

route_get("/c/:type/:item",function (req, res) {
    var item = req.param("item");
    var type = req.param("type");
    var page = findItem(item, type);
    var params = merge({ page:page, path:req.path, title:page.title || "", locals:merge(app.locals,res.locals) });
    res.render("partials/default/_page", params);
});

// todo redirect to our video content page
route_get('/video/*', function (req, res) {
    var path = req.path;
    var idx = path.lastIndexOf('/');
    var file = idx > -1 ? path.substring(idx + 1, path.length) : path;
//    console.log('got request for ', path, ' from ', req.header('Referer'));
    res.redirect('http://watch.neo4j.org/video/' + file);
});


route_get('/api/sitemap.csv', function (req, res) {
    function quote(value) {
        if (value == null || value == "") return "";
        return '"'+value.toString().replace(/"/g,'""')+'"';
    }
    function values(item) {
        if (!item) return [];
        return [item["id"]||item["key"],item["type"],item["path"]||item["url"]||item["src"],item["title"]||item["name"],item["author"]||item["authors"],quote(item["introText"]),quote(item["content"]||item["description"]),item["tags"]];
    }

    var delim = "§";
    var header = ["id", "type", "url", "title", "authors", "intro", "content","tags","child","c_id", "c_type", "c_url", "c_title", "c_authors", "c_intro", "c_content","c_tags"].join(delim);
    var result=[header];
    for (var id in app.locals.pages) {
        var page = app.locals.pages[id];
        var pageStr = values(page).join(delim)+delim;
        console.log(id,"related",typeof(page.related),"featured",typeof(page.featured));
        if (page.featured) page.featured.forEach(function (f) { var item = findItem(f); result.push(pageStr + "FEATURED§" + values(item).join("§"))});
        if (page.related) page.related.forEach(function (f) { var item = findItem(f); result.push(pageStr + "RELATED§" + values(item).join("§"))});
        if (!(page.related || page.featured)) result.push(pageStr);
    }
    res.send(result.join("\n"));
});


http.createServer(app).listen(app.get('port'), function () {
    
    console.log("Express server listening on port " + app.get('port'));
});
