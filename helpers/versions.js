var request=require("request");

exports.load = function (app) {
    var locals = app.locals;
    
    locals.versions = {};

    locals({
        neo4j:{
            version:"2.0.0-M04", date:"Aug 7, 2013", summary:"Preview", readme:"http://blog.neo4j.org/2013/08/summer-release-neo4j-20-milestone-4.html"
        }, neo4jGA:{
            version:"1.9.2", date:"May 20, 2013", summary:"General Availability", readme:"http://blog.neo4j.org/2013/07/neo4j-192-now-available.html"
        }, /*neo4jP:{
            version:"2.0.0-M03", date:"May 28, 2013", summary:"Preview", readme:"http://blog.neo4j.org/2013/04/nodes-are-people-too.html"
        },*/ neo4jS:{
            version:"2.0-SNAPSHOT",
            date:"2013",
            summary:"Unstable Snapshot, for resolution issue verification"
        }
    });

    function temp_update_version(current, data, current_date) {
        if (current != data.version) {
            data.version = current;
            data.date = current_date || "2013";
            data.readme = "http://blog.neo4j.org";
        }
    }

    request("https://raw.github.com/neo4j/current-versions/master/versions.json",
        function (err, res, body) {
            if (err || res.statusCode != 200) {
                console.log("Error retrieving versions ", err, res, body);
                return;
            }
            locals.versions = JSON.parse(body) || {};
            console.log(locals.versions);
            temp_update_version(locals.versions.stable, locals.neo4jGA, locals.versions.stable_date);
            temp_update_version(locals.versions.milestone, locals.neo4j, locals.versions.milestone_date);
            //temp_update_version(locals.versions.preview, locals.neo4jP, locals.versions.preview_date);
            temp_update_version(locals.versions.snapshot, locals.neo4jS);
        }
    )
};