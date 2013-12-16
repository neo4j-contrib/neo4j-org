var asset = require("../helpers/assets.js").asset

/*
 * GET home page.
 */
exports.index_graph = function(req, res){
  res.render('index_graph', { category: '', title: 'Learn, Develop, Participate' });
};

exports.search = function(req, res){
  res.render('search', { category: '', title: 'Search Results' });
};

/*
 * GET - "install" page
 */
exports.install = function(req, res){
  res.render('install', { category: 'install', title: 'Installation' });
};

/*
 * GET - "download thanks" page
 */
exports.download_thanks = function(req, res){
  res.render('download_thanks', { category: 'install', title: 'Go create.' });
};

/*
 * GET - "subscribe thanks" page
 */
exports.subscribe_thanks = function(req, res){
  res.render('subscribe_thanks', { category: 'install', title: 'Thanks' });
};

/*
 * GET - "learn" information with guided tracks
 */
exports.learn = function(req, res){
  res.render('page', { category: 'learn', title: 'Learn' });
};
exports.learn_graphdb = function(req, res){
  res.render('learn_graphdb', { category: 'learn', title: 'Learn' });
};
exports.intro = function(req, res){
  res.render('page', { category: 'learn', title: 'Intro' });
};

exports.learn_graph = function(req, res){
    res.render('learn_graph', { category: 'learn', title: 'What is a graph database?' });
};


/*
 * GET - "learn about neo4j" with an explanation of Neo4j as a graph database
 */
exports.neo4j = function(req, res){
  res.render('learn/neo4j', { category: 'learn', title: 'What is Neo4j?' });
};

exports.cypher = function(req, res){
  res.render('page', { category: 'learn', title: 'Cypher Tutorial' });
};

exports.training = function(req, res){
  res.render('learn/training', { category: 'learn', title: 'Training' });
};

exports.books = function(req, res){
  res.render('learn/books', { category: 'learn', title: 'Books' });
};

/*
 * GET - "Neo4j apps" a showcase of live apps
 */
exports.apps = function(req, res){
  res.render('learn/apps', { category: 'learn', title: 'Apps' });
};



/*
 * GET - "Neo4j Licensing" guide to how we think about dual license
 */
exports.license = function(req, res){
  res.render('learn/licensing', { category: 'learn', title: 'Editions & Licensing Guide' });
};

exports.graphdb = function(req, res){
  res.render('learn/graphdatabase', { category: 'learn', title: 'What is a Graph Database' });
};

/*
 * GET - "NOSQL Datamodel" of Neo4j vs. other databases
 */
exports.nosql = function(req, res){
  res.render('learn/nosql', { category: 'learn', title: 'NOSQL Data Models' });
};


/*
 * GET - "watch" screencasts and other video content
 */
exports.watch = function(req, res){
  res.render('watch', { category: 'learn', title: 'Watch' });
};


/*
 * GET - "develop" applications using Neo4j
 */
exports.develop = function(req, res){
  res.render('page', { category: 'develop', title: 'Develop' });
};
exports.java = function(req, res){
  res.render('page', { category: 'java', title: 'Neo4j for Java developers' });
};
exports.ops = function(req, res){
  res.render('page', { category: 'develop', title: 'Operations' });
};

exports.java_basics = function(req, res){
  res.render('paths/java/java_basics', { category: 'java', title: 'Start using Neo4j from Java' });
};

exports.java_cypher = function(req, res){
    res.render('paths/java/java_cypher', { category: 'java', title: 'Using Cypher from Java' });
};


exports.heroku = function(req, res){
  res.render('develop/heroku', { category: 'develop', title: 'Heroku Add-on' });
};

exports.spring = function(req, res){
    res.render('develop/spring', { category: 'develop', title: 'Spring Data Neo4j' });
};


exports.ec2 = function(req, res){
  res.render('develop/ec2', { category: 'develop', title: 'Easy Neo4j Setup on EC2' });
};

exports.ec2_detailed = function(req, res){
  res.render('develop/ec2_detailed', { category: 'develop', title: 'Detailed Instructions and Skripts for EC2 setup' });
};


exports.spring = function(req, res){
  res.render('develop/spring', { category: 'develop', title: 'Spring Data Neo4j' });
};

exports.drivers = function(req, res){
  res.render('develop/drivers', { category: 'develop', title: 'Language Drivers' });
};

// exports["try"] = function(req, res){
//   res.render('learn/try', { category: 'learn', title: 'Try Neo4j' });
// }

exports.participate = function(req, res){
  res.render('page', { category: 'participate', title: 'Participate' });
};

exports.events = function(req, res){
  res.render('participate/events', { category: 'participate', title: 'Neo4j related events' });
};

exports.contributors = function(req, res){
    res.render('participate/contributors', { category: 'contributors', title: 'Contributors' });
};
exports.meetup_signup = function(req, res){
    res.render('participate/meetup_signup', { category: 'contributors', title: 'Meetup Signup' });
};
exports.example_data = function(req, res){
    res.render('develop/example_data', { category: 'develop', title: 'Sample Datasets' });
};

exports.d3 = function(req, res){
    res.render('d3', { category: 'develop', title: 'D3 Test' });
};

exports.terms = function(req, res){
  res.render('terms', { category: 'terms', title: 'Terms' });
};
exports.privacy = function(req, res){
  res.render('privacy', { category: 'privacy', title: 'Privacy' });
};
exports.release_notes = function(req, res){
  res.render('download/release_notes', { category: 'download', title: 'Release Notes' });
};
exports.upgrade_faq = function(req, res){
  res.render('download/upgrade_faq', { category: 'download', title: 'Upgrade FAQ' });
};

exports.online_course = function(req, res){
  res.render('learn/online_course', { category: 'learn', title: 'Online Course' });
};
exports.customers = function(req, res){
  res.render('customers', { category: 'learn', title: 'Customers' });
};

exports.beer = function(req, res){
    res.render('misc/beer', { category: 'misc', title: 'Beer' });
};

exports.channels = function(req, res){
    res.render('participate/channels', { category: 'participate', title: 'Learning Channels' });
};

exports.asciidoc = function(req, res){
    res.render('testing/asciidoc', {});
};



exports.resource = function(req,res) {
    var path = req.path;
    var idx = path.lastIndexOf('/');
    var file = idx > -1 ? path.substr(idx+ 1,path.length) : path;
    console.log('got request for ',path,' from ',req.header('Referer'));
    res.redirect(301,asset('download/'+file)); 
}
exports.assets = function(req,res,next) {
    var path = req.path;
    if (path.indexOf("/assets") != 0 || path.indexOf("main.js")!=-1 || path.indexOf("main.css")!=-1|| path.indexOf("tweets.js")!=-1) {
       return next();
    }
    var idx = path.indexOf('/',1);
    var file = idx > -1 ? path.substr(idx+ 1,path.length) : path;
    console.log('got request for ',path,' from ',req.header('Referer'));
    res.redirect(301,asset(file)); 
}

exports.pages = function(req,res) {
  res.render('partials/page');
}
