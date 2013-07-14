var tweets=[];
$(document).ready(function(){
    function nextTweet() {
        function reloadTweets() {
            $.ajax("/api/tweets",{
                success: function(data) {
                    tweets=data;
                    if (tweets.length) nextTweet();
                }
            })
        }
        var tweet = tweets.shift();
        if (!tweet) {
            reloadTweets(); return;
        }
        var seconds = (new Date() - Date.parse(tweet['created_at'])) / 1000;
        var time = seconds + "s ago";
        if (seconds > 3600 * 24) time = (seconds / 3600 / 24).toFixed() + "d ago";
        else if (seconds > 3600 ) time = (seconds / 3600 ).toFixed() + "h ago";
        else if (seconds > 60) time = (seconds / 60 ).toFixed() + "m ago";
        var twitter = $("#twitter_bar div");
        var user=tweet['user'];
        twitter.find("a.twitter_user img").attr("src",user['profile_image_url']);
        twitter.find("a.twitter_user").attr("href","http://twitter.com/"+user['name']);
        twitter.find("a.twitter_user span").text(user['screen_name']);
        twitter.find("span.text").html(tweet['rendered']);
        twitter.find("a.twitter_date").html(time);
        twitter.find("a.twitter_date").attr("href","http://twitter.com/"+user['name']+"/status/"+tweet['id_str']);;
    }
    nextTweet();
    setInterval(nextTweet,10*1000);
})
