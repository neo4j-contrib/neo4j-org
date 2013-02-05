
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { category: '', title: 'Learn, Develop, Participate' });
};

exports.index_graph = function(req, res){
    res.render('index_graph', { category: '', title: 'Start' });
};
exports.index_graph_svg = function(req, res){
    res.render('index_graph_svg', { category: '', title: 'Start' });
};
exports.index_graph_svg2 = function(req, res){
    res.render('index_graph_svg2', { category: '', title: 'Start' });
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
  res.render('learn', { category: 'learn', title: 'Learn' });
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
  res.render('learn/cypher', { category: 'learn', title: 'Cypher Tutorial' });
};

exports.training = function(req, res){
  res.render('learn/training', { category: 'learn', title: 'Training' });
};

exports.books = function(req, res){
  res.render('learn/books', { category: 'learn', title: 'Books' });
};

exports.visualize = function(req, res){
  res.render('develop/visualize', { category: 'develop', title: 'Graph Visualizations' });
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
  res.render('develop', { category: 'develop', title: 'Develop' });
};
exports.java = function(req, res){
  res.render('paths/java', { category: 'java', title: 'Neo4j for Java developers' });
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

exports["try"] = function(req, res){
  res.render('learn/try', { category: 'learn', title: 'Try Neo4j' });
}

exports.participate = function(req, res){
  res.render('participate', { category: 'participate', title: 'Participate' });
};

exports.events = function(req, res){
  res.render('learn/events', { category: 'participate', title: 'Neo4j related events' });
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
exports.customers = function(req, res){
  res.render('customers', { category: 'learn', title: 'Customers' });
};

exports.beer = function(req, res){
    res.render('misc/beer', { category: 'misc', title: 'Beer' });
};



exports.resource = function(req,res) {
    var path = req.path;
    var idx = path.lastIndexOf('/');
    var file = idx > -1 ? path.substr(idx+ 1,path.length) : path;
    console.log('got request for ',path,' from ',req.header('Referer'));
    res.redirect('/assets/download/'+file); 
}
