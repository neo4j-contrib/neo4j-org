
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { category: '', title: 'Learn, Create, Participate' });
};

/*
 * GET - "download" page
 */
exports.index = function(req, res){
  res.render('download', { category: 'download', title: 'Download' });
};


/*
 * GET - "learn" information with guided tracks
 */
exports.learn = function(req, res){
  res.render('learn', { category: 'learn', title: 'Learn' });
};


/*
 * GET - "learn about neo4j" with an explanation of Neo4j as a graph database
 */
exports.neo4j = function(req, res){
  res.render('learn/neo4j', { category: 'learn', title: 'Neo4j' });
};


/*
 * GET - "watch" screencasts and other video content
 */
exports.watch = function(req, res){
  res.render('watch', { category: 'learn', title: 'Watch' });
};


/*
 * GET - "browse" examples, demos, and production apps
 */
exports.browse = function(req, res){
  res.render('browse', { category: 'learn', title: 'Browse' });
};


/*
 * GET - "read" read blog posts about Neo4j
 */
exports.browse = function(req, res){
  res.render('browse', { category: 'learn', title: 'Read' });
};



/*
 * GET - "create" applications using Neo4j
 */
exports.create = function(req, res){
  res.render('create', { category: 'create' });
};


/*
 * GET - "integrate" with languages and frameworks
 */
exports.integrate = function(req, res){
  res.render('integrate', { category: 'create', title: 'Integrate' });
};

