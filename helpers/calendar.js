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
			item.Title=item.title;
            event_prop(item,'Start',/When: (.+?)(\n|<br *\/>)/)
            event_prop(item,'Status',/Event Status: (.+?)(\n|<br *\/>)/)
            event_prop(item,'Location',/Where: (.+?)(\n|<br *\/>)/)
            event_prop(item,'Description',/Event Description: ([\s\S]+)$/)
            event_prop(item,'Url',/Event Description: <a +href="(.+?)".*>.+?<\/a>/)
            event_prop(item,'UrlText',/Event Description: <a +href=".+?".*>(.+?)<\/a>/)
            item.Description = item.Description.replace(/^<a +href=".+?".*>.+?<\/a> */,"");
            if (item.Url && item.Url.match(/http:\/\/www.google.com\/url\?q=/)) {
              var url=item.Url.replace(/http:\/\/www.google.com\/url\?q=/,"")
              url=decodeURIComponent(url);
              url=url.replace(/&amp;ust=.*$/,"");
              item.Url=url;
            }
            var meetup=item.Url.match(/http:\/\/(?:www\.)?meetup.com\/(.+)(?:\/events\/(\d+))/);
            if (meetup){
                item.Group=meetup[1];
                item.Meetup=meetup[2];
            }
			if (item.Description.match(/Meetup/)) item.Type="Meetup";
			if (item.Description.match(/(Training|Tutorial)/)) item.Type="Training";
			if (item.Description.match(/Webinar/)) item.Type="Webinar";
			if (item.Description.match(/Conference/)) item.Type="Conference";
            event_prop(item,'Area','US') // TODO
            // console.log(item)
			console.log(item['Location']);
            return item;
        });
        if (filter) fun(items.filter(filter));
        else fun(items)
    });
}

exports.events=events
exports.events2=events2