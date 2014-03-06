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
        if (id) items[id] = item;
    }
    console.log("graphgists",items.length);
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
        });
    }

    spreadsheet.googleLogin(function () {
        update();
    });
    setInterval(update, interval);
}

exports.graphgists = graphgists
