var request=require("request");

exports.load = function (app) {
    var locals = app.locals;
    
    locals.versions = {};

    locals({
        neo4j:{
            version:"2.1.2", date:"June 12, 2014", summary:"Release", readme:"http://neo4j.com/blog/neo4j-2-1-2/"
        }, neo4jGA:{
            version:"2.1.2", date:"June 12, 2014", summary:"Release", readme:"http://neo4j.com/blog/neo4j-2-1-2/"
        }, /*neo4jP:{
            version:"2.0.0-M03", date:"May 28, 2013", summary:"Preview", readme:"http://blog.neo4j.org/2013/04/nodes-are-people-too.html"
        },*/ neo4jS:{
            version:"2.1.3-SNAPSHOT",
            date:"2014",
            summary:"Unstable Snapshot, for issue resolution verification"
        }
    });

    function temp_update_version(current, data, current_date) {
        if (current != data.version) {
            data.version = current;
            data.date = current_date || "2014";
            data.readme = "http://neo4j.com/blog/";
        }
    }

    request("https://raw.github.com/neo4j/current-versions/master/versions.json",
        function (err, res, body) {
            if (err || res.statusCode != 200) {
                console.log("Error retrieving versions ", err, res, body);
                return;
            }
            locals.versions = { stable : locals.neo4jGA.version, milestone: locals.neo4j.version, snapshot: locals.neo4jS.version};
//            locals.versions = JSON.parse(body) || {};
            console.log(locals.versions);
            temp_update_version(locals.versions.stable, locals.neo4jGA, locals.versions.stable_date);
            temp_update_version(locals.versions.milestone, locals.neo4j, locals.versions.milestone_date);
            //temp_update_version(locals.versions.preview, locals.neo4jP, locals.versions.preview_date);
            temp_update_version(locals.versions.snapshot, locals.neo4jS);
        }
    )
};
