exports.asset = function(file) {
	// todo check if locally available
	// return "/assets"
	// return "https://s3.amazonaws.com/assets.neo4j.org/"+file;
    return "http://assets.neo4j.org/"+file;
};

exports.merge = function() {
    var res={};
    for (i in arguments) {
        if (arguments.hasOwnProperty(i)) {
            var arg=arguments[i];
            for (prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    res[prop] = arg[prop];
                }
            }
        }
    }
//    console.log("merge",Object.keys(res));
    return res;
};
