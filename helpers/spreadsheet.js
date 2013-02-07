var GoogleClientLogin = require("googleclientlogin").GoogleClientLogin;
var GoogleSpreadsheets = require("hooky-spreadsheets");

var googleAuth = new GoogleClientLogin({
    email: process.env.AUTH_EMAIL,
    password: process.env.AUTH_PASS,
    service: 'spreadsheets',
    accountType: GoogleClientLogin.accountTypes.google
});

function wrap(prefix, value, suffix) {
    var str = "";
    if (value) {
        if (prefix) str = prefix;
        str += value.toString();
        if (suffix) str += suffix;
    }
    return str;
}

function parseEvents(cells, fun, filter) {
    var now = new Date();
    var header;
    var items = [];
    for (var rowNo in cells.cells) {
        var row = cells.cells[rowNo]
        if (!header) {
            header = row;
            continue;
        }
        var item = {};
        for (var colNo in row) {
            item[header[colNo].value] = row[colNo].value
        }
        if (new Date(item.Start) >= now && item.Created && item.Created.length > 0 && (!filter || filter(item))) {
            item.Title = wrap(item['Type'], " - ") + item['Title'] + wrap(" - ", item['City'])
            items.push(item);
        }
    }
    if (filter) fun(items.filter(filter));
    else fun(items)
}
function events(fun, filter) {
    googleAuth.on(GoogleClientLogin.events.login, function () {
        GoogleSpreadsheets({
            key: process.env.EVENTS_SHEET_KEY,
            auth: googleAuth.getAuthId()
        }, function (err, spreadsheet) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            spreadsheet.worksheets[0].cells({
                range: "R1C1:R100C26"
            }, function (err, cells) {
                if (err) {
                    console.log("Error retrieving spreadsheet ", err)
                }
                parseEvents(cells, fun, filter);
            });
        });
    });
    googleAuth.login();
}

function parseContributors(cells, fun, filter) {
    var header;
    var items = {};
    for (var rowNo in cells.cells) {
        var row = cells.cells[rowNo]
        if (!header) {
//            console.log("headerÖ", row);
            header = row;
            continue;
        }
        var item = {};
        for (var colNo in row) {
            item[header[colNo].value] = row[colNo].value;
        }
//        if (new Date(item.Start) >= now && item.Created && item.Created.length > 0 && (!filter || filter(item))) {
//            item.Title = wrap(item['Type'], " - ") + item['Title'] + wrap(" - ", item['City'])
        items[item.twitter || item.name] = item;

//        }
    }
    if (filter) fun(items.filter(filter));
    else fun(items)
}

function contributors(fun, filter) {
    googleAuth.on(GoogleClientLogin.events.login, function () {
        GoogleSpreadsheets({
            key: process.env.CONTRIBUTORS_SHEET_KEY,
            auth: googleAuth.getAuthId()
        }, function (err, spreadsheet) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            spreadsheet.worksheets[0].cells({
                range: "R1C1:R100C8"
            }, function (err, cells) {
                if (err) {
                    console.log("Error retrieving spreadsheet ", err)
                }
                parseContributors(cells, fun, filter);
            });
        });
    });
    googleAuth.login();
}


function parseChannels(data, fun, filter) {
    console.log("data",data.cells);
    var result=[];
    for (var row in data ) {
        result.push([row,data[row]['1']['value'],data[row]['2']['value']]);
    }

    console.log("result",result);
    result = result.splice(1).sort(function(x,y) { return x.votes>y.votes});
    if (filter) fun(sorted.filter(filter));
    else fun(result);
}

function channels(fun, filter) {
    googleAuth.on(GoogleClientLogin.events.login, function () {
        GoogleSpreadsheets({
            key: process.env.CHANNELS_SHEET_KEY,
            auth: googleAuth.getAuthId()
        }, function (err, spreadsheet) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            spreadsheet.worksheets[0].cells({
                range: "R1C1:R10C2"
            }, function (err, cells) {
                if (err) {
                    console.log("Error retrieving spreadsheet ", err)
                }
                parseChannels(cells, fun, filter);
            });
        });
    });
    googleAuth.login();
}

exports.events = events
exports.contributors = contributors
exports.channels = channels