var spreadsheet = require("./spreadsheet");

function parseContributors(cells, fun, filter) {
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
        var id=item.twitter || item.name;
        if (id) items[id] = item;
    }
    if (filter) fun(items.filter(filter));
    else fun(items)
}

function contributors(fun, filter) {
    spreadsheet.load(process.env.CONTRIBUTORS_SHEET_KEY, function (err, sheet) {
        if (err) {
            console.log("Error retrieving spreadsheet ", err)
        }
        sheet.worksheets[0].cells({
            range:"R1C1:R100C8"
        }, function (err, cells) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            parseContributors(cells, fun, filter);
        });
    });
}

exports.init = function(app,interval) {
    function update() {
        contributors(function(items) {
            console.log("contributors",Object.keys(items).length,JSON.stringify(Object.keys(items)));
            app.locals.contributors = items;
        });
    }
    spreadsheet.googleLogin(function () {
        update();
    });
    setInterval(update,interval);
}

exports.contributors = contributors
