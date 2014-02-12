var ejs = require('ejs')
    ,fs = require('fs');

var cache = {};

exports.include = function (path, options) {
    var content = cache[path];
    var fileName = "views/" + path + ".ejs";
    options.filename=fileName;
    if (!content) {
        content = fs.readFileSync(fileName).toString();
        cache[path] = content;
    }
//    console.log("Rendering ",fileName);
    return ejs.render(content, options);
};

exports.render = ejs.render