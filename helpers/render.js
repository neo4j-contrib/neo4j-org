var ejs = require('ejs')
    ,fs = require('fs');

var cache = {};

exports.include = function (path, options) {
    var content = cache[path];
    if (!content) {
        content = fs.readFileSync("views/" + path + ".ejs").toString();
        cache[path] = content;
    }
    return ejs.render(content, options);
};

exports.render = ejs.render