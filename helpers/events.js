var rssparser = require('rssparser')
  , http = require('http')
  

// curl 'http://www.google.com/calendar/feeds/neopersistence.com_3p7hh97rfcu76paib7l2dp4llo@group.calendar.google.com/public/full?alt=json-in-script&callback=insertAgenda&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true'

function events2(fun, filter,calendar) {
    // graphdb-belgium/events/81881472
    calendar = calendar || "neopersistence.com_3p7hh97rfcu76paib7l2dp4llo@group.calendar.google.com";
    var results=1
    var url="/calendar/feeds/"+calendar+
        "/public/full?alt=json&orderby=starttime&max-results="+results+
        "&singleevents=true&sortorder=ascending&futureevents=true";
//	console.log(url);
    http.get({host: 'www.google.com', path: url},
        function(r) {
            r.setEncoding('utf8');
            var content="";
            r.on("end",function(x) {
                var json=JSON.parse(content);
                fun(json.feed.entry);
            })
            r.on("data", function(data) {
                content += data;    
            })
        })
}

events2(function(json) {
	
});
function events(fun, filter) {
    var calendarUrl='http://www.google.com/calendar/feeds/neopersistence.com_3p7hh97rfcu76paib7l2dp4llo%40group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&max-results=30&futureevents=true&hl=en';
    rssparser.parseURL(calendarUrl, { headers: {'Accept-Language':'en'}}, function(err, out){
        function event_prop(item,name,regexp) {
            var match = item.summary.match(regexp);
            item[name]=match == null ? '' : match[1];
        }
        var items=out.items.map(function(item) {
            event_prop(item,'date',/When: (.+?)(\n|<br *\/>)/)
            event_prop(item,'status',/Event Status: (.+?)(\n|<br *\/>)/)
            event_prop(item,'location',/Where: (.+?)(\n|<br *\/>)/)
            event_prop(item,'description',/Event Description: ([\s\S]+)$/)
            event_prop(item,'page',/Event Description: <a +href="(.+?)".*>.+?<\/a>/)
            event_prop(item,'page_text',/Event Description: <a +href=".+?".*>(.+?)<\/a>/)
            item.description = item.description.replace(/^<a +href=".+?".*>.+?<\/a> */,"");
            if (item.page && item.page.match(/http:\/\/www.google.com\/url\?q=/)) {
              var url=item.page.replace(/http:\/\/www.google.com\/url\?q=/,"")
              url=decodeURIComponent(url);
              url=url.replace(/&amp;ust=.*$/,"");
              item.page=url;
            }
            var meetup=item.page.match(/http:\/\/(?:www\.)?meetup.com\/(.+)(?:\/events\/(\d+))/);
            if (meetup){
                item.meetup_group=meetup[1];
                item.meetup_event=meetup[2];
            }
            // console.log(item)
            return item;
        });
        if (filter) fun(items.filter(filter));
        else fun(items)
    });
}

exports.events=events
exports.events2=events2