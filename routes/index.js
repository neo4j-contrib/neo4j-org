
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { category: '', title: 'Learn, Create, Participate' });
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
 * GET - "create" applications using Neo4j
 */
exports.create = function(req, res){
  res.render('create', { category: 'create', title: 'Create' });
};


/*
 * GET - "spring" everything you need to know about SDN
 */
exports.spring = function(req, res){
  res.render('create/spring', { category: 'create', title: 'Spring Data Neo4j' });
};

/*
 * GET - "integrate" with languages and frameworks
 */
exports.integrate = function(req, res){
  res.render('integrate', { category: 'create', title: 'Integrate' });
};

/*
 * GET - "participate" in the Neo4j community
 */
exports.participate = function(req, res){
  res.render('participate', { category: 'participate', title: 'Participate' });
};

