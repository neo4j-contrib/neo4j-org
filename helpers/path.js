function next_steps(locals, routes, path, page) {
    var meta = locals.paths[path][page];
	var steps = meta.steps;
    var urls=[];
    var mock = { render : function (page,opts) { var dest=urls[urls.length-1];dest.page=page;dest.opts=opts; }, 
                     url: function (url) {urls.push({url:url});return this;}
               }
    for (var i=0;i<steps.length;i++) {
        var step=steps[i];
        var route = routes[step];
//      console.log(page,route ? route.url : "undefined");
        if (route) {
            route(null, mock.url(route.url))
        }
    }
    return urls;
//  console.log(urls)
}

function related(locals, path, page) {
    var meta = locals.paths[path][page];
    return meta.related;
}

exports.next_steps = next_steps
exports.related = related
