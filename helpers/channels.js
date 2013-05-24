var spreadsheet = require("./spreadsheet");

function channelOp(params, res) {
    var options = {
        host: 'script.google.com',
        path: process.env.CHANNELS_ENDPOINT + "?" + params,
        headers: { 'Content-Length': 0 },
        method: 'POST'
    };
    //console.log(options);
    var req2 = https.request(options, function (r) {
        //console.log(r.statusCode);
        res.send(r.statusCode);
    });
    req2.on('error', function (e) {
        console.error(e);
    });
    req2.end();
}

exports.add_vote_route = function(app) {
    app.post("/vote", function (req, res) {
        var row = req.param("row");
        console.log("voted on", row);
        channelOp("voteRow=" + parseInt(row), res);
    });
}
exports.add_new_channel_route = function(app) {
    app.post("/add_channel", function (req, res) {
        var name = req.param("name");
        var logo = req.param("logo");
        var url = req.param("url");
        var lang = req.param("lang");
        var params = "addRow=" + encodeURIComponent(name) +
            "&url=" + encodeURIComponent(url) +
            "&logourl=" + encodeURIComponent(logo) +
            "&language=" + encodeURIComponent(lang);
        console.log("add_channel", params);
        channelOp(params, res);
    });
}

function parseChannels(data, fun) {
	data = data.cells
    // console.log("data",JSON.stringify(data));
    var result=[];
    for (var row in data ) {
	    try {
	        var votes=data[row]['2']||{};
            result.push({row:row, 
    	            name: data[row]['1']['value'], 
    	            votes: parseInt(votes['value']||'0'),
    	            url: (data[row]['3']||{})['value'],
    	            logo: (data[row]['4']||{})['value'],
    	            lang: (data[row]['5']||{})['value']
    	    });
    	} catch(e) {
			console.log("Channel error",row,data[row],e);
		}
    }
    result = result.splice(1).sort(function(x,y) { 
        return x.name < y.name ? -1 : 1;
	});
	fun(result);
}

function vote_channel(row,fun) {
	if (!authId) return;

    spreadsheet.load( process.env.CHANNELS_SHEET_KEY, function (err, spreadsheet) {
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
}

function channels(fun) {
    spreadsheet.load(process.env.CHANNELS_SHEET_KEY, function (err, sheet) {
        if (err) {
            console.log("Channels: Error retrieving spreadsheet ", err)
        }
        sheet.worksheets[0].cells({
            range:"R1C1:R100C5"
        }, function (err, cells) {
            if (err) {
                console.log("Channels: Error retrieving spreadsheet ", err)
            } else {
                parseChannels(cells, fun);
            }
        });
    });
}

exports.channels = channels

exports.init = function(app,interval) {
    app.locals.updateChannels = function() {
        //console.log("Updating Channels");
        channels(function(items) {
            items.forEach(function(item) { item.type="channel"; });
            app.locals.channels = items;
            app.locals.pages.channels.related = [{type:'channel'}].concat(items);
            //console.log("Updated Channels ",app.locals.pages.channels.related.length);
        });
    }
    
    setInterval(app.locals.updateChannels,interval);
    
    spreadsheet.googleLogin(function () {
        app.locals.updateChannels();
    });
    exports.add_vote_route(app);
    exports.add_new_channel_route(app);
}