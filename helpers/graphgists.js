var spreadsheet = require("./spreadsheet");
var content = require("./content").content;

function parseGraphgists(cells, fun, filter) {
    var header;
    var items = {};
    for (var rowNo in cells.cells) {
        var row = cells.cells[rowNo]
        if (!header) {
            header = row;
            continue;
        }
        var item = {};
        for (var colNo in row) {
            item[header[colNo].value] = row[colNo].value;
        }
        var id = item['Gist Title'];
        item.type = "graphgist";
        item.key  = item.title = id;
        var url=item['GraphGist URL'];
        var idx = url.indexOf("?");
        if (idx !=-1) {
            var relative = url.substring(idx);
            url = "/graphgist" + relative;
        }
        item.url = item.path = url;
        item.introText = item['Description'];
        item.img = item.src =  item['Image-URL'];
        item.author = {name:item['Your Name'], twitter:item['Twitter']};
        item.name = item['Your Name'];
        item.twitter = item['Twitter'];
        item['Category'] = item['Category'] || "Other";
        item['Rating'] = parseFloat(item['Rating']||"0");
//        console.log(JSON.stringify(item));
        if (id) items[id] = item;
    }
    console.log("graphgists",Object.keys(items).length);
    if (filter) fun(items.filter(filter));
    else fun(items)
}

function graphgists(fun, filter) {
    spreadsheet.load(process.env.GRAPHGISTS_SHEET_KEY, function (err, sheet) {
        if (err) {
            console.log("Error retrieving spreadsheet ", err)
        }
        sheet.worksheets[2].cells({
            range: "R1C2:R300C12"
        }, function (err, cells) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            parseGraphgists(cells, fun, filter);
        });
    });
}

exports.init = function (app, interval) {
    function update() {
        graphgists(function (items) {
            app.locals.graphgists = items;
            content.graphgists = items;
            var array = Object.keys(items).map(function(k){return items[k]});
            array = array.sort(function(item1,item2) {
                var catComp = item1.Category.localeCompare(item2.Category);
                var ratingComp = item2.Rating - item1.Rating;
//                return  catComp == 0 ? ratingComp : catComp;
                return  ratingComp == 0 ? catComp : ratingComp;
            });
            var page = app.locals.pages["graphgist"];
            page.related = array;
        });
    }

    spreadsheet.googleLogin(function () {
        update();
    });
    setInterval(update, interval);
}

exports.graphgists = graphgists
