var request=require('request');

function tweets(cb) {
    var query="from:neo4j OR from:neo4jDE OR from:neo4jFR OR @Neo4j OR #neo4j";
    var url = "http://search.twitter.com/search.json?lang=en&rpp=100&page=1&q="+encodeURIComponent(query);
    request(url,function(err,res,body) {
        if (err) {
            console.log("Error retrieving tweets",err);
            return;
        }
        var json = JSON.parse(body);
        var tweets = json["results"];
        tweets.forEach(function(tweet) {
           tweet.created_date = Date.parse(tweet.created_at);
           tweet.rendered=tweet.text
               .replace(/(https?:\/\/\S+)/g,"<a target='_blank' href='$1'>$1</a>")
               .replace(/@(\w+)/g,"<a target='_blank' href='http://twitter.com/$1'>@$1</a>")
               .replace(/#(\w+)/g,"<a target='_blank' href='https://twitter.com/search?src=hash&q=%23$1'>#$1</a>");  
        });
        console.log("tweets",tweets.length);
        cb(tweets);
    });
}

exports.load_tweets = function (app, interval) {
    var updateTweets = function () {
        tweets(function (data) {
            app.locals.tweets = data;
        });
    };
    setInterval(updateTweets, interval);
    updateTweets();
};

exports.add_tweet_route = function (path, app) {
    app.get(path, function (req, res) {
        if (!app.locals.tweets) {
            res.send(404);
            return;
        }
        res.type("json");
        res.send(200, JSON.stringify(app.locals.tweets.slice(0, 12)));
    })
};