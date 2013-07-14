// see for TWITTER_BEARER token: https://dev.twitter.com/docs/auth/application-only-auth
// curl -XPOST -u customer:secret 'https://api.twitter.com/oauth2/token?grant_type=client_credentials'
// returns {"token_type":"bearer","access_token":"....bearer token...."}

var request=require('request');

function tweets(cb) {
    var query="from:neo4j OR from:neo4jDE OR from:neo4jFR OR @Neo4j OR #neo4j";
    var url = "https://api.twitter.com/1.1/search/tweets.json?lang=en&count=12&result_type=recent&q="+encodeURIComponent(query);
    request(url,{headers: {"Authorization":"Bearer "+process.env.TWITTER_BEARER}},function(err,res,body) {
        if (err) {
            console.log("Error retrieving tweets",err);
            return;
        }
        var json = JSON.parse(body);
        var tweets = json["statuses"];
        tweets.forEach(function(tweet) {
           tweet.rendered=tweet.text
               .replace(/(https?:\/\/\S+)/g,"<a target='_blank' href='$1'>\(link\)</a>")
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