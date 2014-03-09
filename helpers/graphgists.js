var spreadsheet = require("./spreadsheet");

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
        item.key = id;
        item['Category'] = item['Category'] || "Other";
        item['Rating'] = parseFloat(item['Rating']||"0");
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
