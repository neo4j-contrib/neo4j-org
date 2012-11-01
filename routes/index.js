
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Learn, Create, Connect' });
};

/*
 * GET language and framework integration page.
 */
exports.integrate = function(req, res){
  res.render('integrate', { title: 'Integrate' });
};