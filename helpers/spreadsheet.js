var GoogleClientLogin = require("googleclientlogin").GoogleClientLogin;
var GoogleSpreadsheets = require("hooky-spreadsheets");

var googleAuth = new GoogleClientLogin({
    email: process.env.AUTH_EMAIL,
    password: process.env.AUTH_PASS,
    service: 'spreadsheets',
    accountType: GoogleClientLogin.accountTypes.google
});

var authId;

googleAuth.on(GoogleClientLogin.events.login, function () {
    authId = googleAuth.getAuthId()
});
googleAuth.login();

// todo handle login once

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


function parseChannels(data, fun) {
	data = data.cells
    // console.log("data",JSON.stringify(data));
    var result=[];
    for (var row in data ) {
	    var votes=data[row]['2']||{};
        result.push({row:row, 
	            name: data[row]['1']['value'], 
	            votes: parseInt(votes['value']||'0'),
	            url: (data[row]['3']||{})['value'],
	            logo: (data[row]['4']||{})['value'],
	            lang: (data[row]['5']||{})['value']
	    });
    }
    result = result.splice(1).sort(function(x,y) { 
		if (x.votes==y.votes) {
			return x.name < y.name ? -1 : 1;
		}
		return x.votes > y.votes ? -1 : 1
	});
	fun(result);
}

function vote_channel(row,fun) {
    googleAuth.on(GoogleClientLogin.events.login, function () {
        GoogleSpreadsheets({
            key: process.env.CHANNELS_SHEET_KEY,
            auth: googleAuth.getAuthId()
        }, function (err, spreadsheet) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            spreadsheet.worksheets[0].cells({
                range: "R1C1:R100C5"
            }, function (err, cells) {
                if (err) {
                    console.log("Error retrieving spreadsheet ", err)
                } else {
                    vote(cells, fun);
                }
            });
        });
    });
    googleAuth.login();
}

function channels(fun) {
    googleAuth.on(GoogleClientLogin.events.login, function () {
        GoogleSpreadsheets({
            key: process.env.CHANNELS_SHEET_KEY,
            auth: googleAuth.getAuthId()
        }, function (err, spreadsheet) {
            if (err) {
                console.log("Error retrieving spreadsheet ", err)
            }
            spreadsheet.worksheets[0].cells({
                range: "R1C1:R100C5"
            }, function (err, cells) {
                if (err) {
                    console.log("Error retrieving spreadsheet ", err)
                } else {
                    parseChannels(cells, fun);
                }
            });
        });
    });
    googleAuth.login();
}
exports.events = events
exports.contributors = contributors
exports.channels = channels