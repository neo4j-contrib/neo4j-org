var request = require("request");

exports.load_videos = function(cb) {
    // http://vimeo.com/api/v2/neo4j/videos.json?page=4
    function load(page,cb) {
        request('http://vimeo.com/api/v2/neo4j/videos.json?page='+page, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            cb(JSON.parse(body));
          }
        });
    }
    load(1,cb);
    load(2,cb);
    load(3,cb);
    // only 3 pages from vimeo
}