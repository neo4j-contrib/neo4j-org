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
exports.load_videos = load_videos

exports.loadAllVideos = function(pages, content, nr_featured) {
    var all_videos = [];
    nr_featured= nr_featured || 4;

    function categorize(item) {
        if (item.category) return item;
        if (item.title.match(/GraphConnect|Graph Connect|Intro 2/i)) { item.category = 'graphconnect';return item;}
        if (item.title.match(/^[\d/]{3,4}|Intro to|[\d/]{3,4}$|beer|dataset/i)) {item.category = 'webinar'; return item;}
        if (item.title.match(/Interview|What is|Testimonial| - |Need a graph database|knows/i) || item.introText && item.introText.match(/Interview/i)) { item.category = 'interview';return item;}
        item.category = 'other';
        return item;
    }
    function distributeToVideoPages(pages,nr_featured) {
        ['graphconnect', 'interview', 'webinar', 'other'].forEach(function (category) {
            var page = pages["videos_" + category];
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
            content.videos[video.id] = video;
            console.log(video.id,video.category,video.title);
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
    })
}
