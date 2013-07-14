var request = require("request");

function load_videos(cb) {
    // http://vimeo.com/api/v2/neo4j/videos.json?page=4
    function load(page, cb) {
        request('http://vimeo.com/api/v2/neo4j/videos.json?page=' + page, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                cb(JSON.parse(body));
            }
        });
    }
    
    // only 3 pages from vimeo
    load(1, function(v1) {
        load(2, function(v2) {
            load(3,function(v3) {
                cb(v1.concat(v2).concat(v3));
            })
        })
    });
}

function categorize(item) {
    if (item.category) return item;
    if (item.title.match(/GraphConnect|Graph Connect|Intro 2/i)) { item.category = 'graphconnect';return item;}
    if (item.title.match(/^[\d/]{3,4}|^Neo Technology [\d/]{3,4}|Intro to|[\d/]{3,4}$|beer|dataset|getting|introduction to/i)) {item.category = 'webinar'; return item;}
    if (item.title.match(/Interview|What is|Testimonial|discusses| - |Need a graph database|knows/i) || item.introText && item.introText.match(/Interview/i)) { item.category = 'interview';return item;}
    if (item.title.match(/byrjendur|pathology|Live graph session: how Allison knows James/i)) { return null;}
    item.category = 'other';
    return item;
}

var v = {"thumbnail:500x400":"http://vidcaster-media.s3.amazonaws.com/sites/145/videos/224376/freeze/thumbs/500x400LEJY8.jpg",
 "video_url":"http://video.neo4j.org/transcode/redirects/315163.mp4",
 "pubdate":"2012-08-23T00:05:46",
 "headline":"Graphs in India - Nikhil Lanjewar",
 "absolute_url":"http://video.neo4j.org/aFU3E/graphs-in-india-nikhil-lanjewar/",
 "summary":"Nikhil Lanjewar, a member of the neo4j community, speaks about graph databases, the neo4j community in India and how interested persons can be involved with the use of the tool as well as the community.\r\n",
 "thumbnail:200x100":"http://vidcaster-media.s3.amazonaws.com/sites/145/videos/224376/freeze/thumbs/200x100F9N8N.jpg",
 "length":"00:45:03",
 "thumbnail":"http://vidcaster-media.s3.amazonaws.com/sites/145/videos/224376/freeze/thumbs/120x68HFQTH.jpg"};
function load_vidcaster(cb) {
    // http://video.neo4j.org/feeds/json?thumbnail=200x100&thumbnail=500x400
    request("http://video.neo4j.org/feeds/json?thumbnail=500x400", function (error,response,body) {
        if (!error && response.statusCode == 200) {
            var videos = JSON.parse(body);
            var items=videos.map(function(video) {
               var id=video.absolute_url.match(/http:\/\/video.neo4j.org\/(.+?)\/.+\//)[1];
               // console.log(video);
               if (!id) {
                   console.log("Missing video id ",video.absolute_url,video);
                   return null;
               }
               var item={
                   id:id,
                   type:"video",
                   title:video.headline,
                   src:"http://video.neo4j.org/player/"+id+"/native/autoplay/",
                   thumbnail:video.thumbnail,
                   img:video['thumbnail:500x400'],
                   duration:video.length,
                   date:Date.parse(video.pubdate)
               };
                if (video.tags && video.tags.length) item.tags = video.tags;
                if (video.summary && video.summary.length) item.introText = video.summary;
                return categorize(item);
            }).filter(function(video){ return video != null;});
            cb(items);
        }
    })
}

exports.load_videos = load_videos

exports.loadAllVideos = function(pages, content, nr_featured) {
    var all_videos = [];
    nr_featured= nr_featured || 4;

    function distributeToVideoPages(pages,nr_featured) {
        ['graphconnect', 'interview', 'webinar', 'other'].forEach(function (category) {
            var pageName = "videos_" + category;
            var page = pages[pageName];
            page.related = [];
            all_videos.forEach(function (video) {
                if (video.category != category) return;
                page.related.push(video);
            });
            page.featured = page.related.slice(0, nr_featured);
            page.related = page.related.slice(nr_featured);
        })
        pages.videos.featured = all_videos.slice(0, 4);
    }

    function sortVideos() {
        all_videos = all_videos.sort(function (v1, v2) {
            return v2.date - v1.date;
        });
    }

    function makeAvailableAsContent() {
        all_videos.forEach(function (video) {
            if (!video.id) {
                console.log("No id",video);
            }
            content.videos[video.id.toString()] = video;
            content.videos[video.title] = video;
            console.log(video.id,video.category,video.title,video.tags);
        })
    }

    function createVideoItem(video) {
        var item = {
            id:video.id,
            type:"video",
            title:video.title,
            src:"http://player.vimeo.com/video/" + video.id,
            thumbnail:video.thumbnail_medium,
            img:video.thumbnail_large,
            duration:video.duration,
            date:Date.parse(video.upload_date)
        };
        if (video.tags && video.tags.length) item.tags = video.tags;
        if (video.description && video.description.length) item.introText = video.description;

        categorize(item);
        return item;
    }

    load_videos(function (data) {
        if (!data) return;
        data.forEach(function (video) {
            all_videos.push(createVideoItem(video));
        });
        sortVideos();
        distributeToVideoPages(pages,nr_featured);
        makeAvailableAsContent();
        console.log("videos", all_videos.length);
//        load_vidcaster(function(items) {
//            console.log("vidcaster videos",items.length);
//            all_videos.push.apply(all_videos,items);
//        });
    })
}
