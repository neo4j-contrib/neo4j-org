var soap = require('soap'),
    MarketoSecurity = require('marketo-soap-security').MarketoSecurity,
    wsdlUrl = 'https://na-l.marketo.com/soap/mktows/1_7?WSDL';

var marketoId = process.env.MARKETO_ID;
var marketoSecret = process.env.MARKETO_SECRET;

var marketoClient;
try {
    soap.createClient(wsdlUrl, function(err, client) {
        if (client) {
            // console.log(client.describe());
            marketoClient = client;
        }
        if (err) {
            console.log("Error creating soap client for Marketo", err);
        }
    });
} catch(e) {
	console.log("Error creating soap client for Marketo", e);
}

var getMarketoLeadFromValueAndType = function (id, type, fun) {
    marketoClient.setSecurity(MarketoSecurity(marketoId, marketoSecret));
    marketoClient.getLead({leadKey: {keyType: type, keyValue:id}}, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (!err && result) {
            console.log(JSON.stringify(result));
            var ids = extractIds(result);
            var firstId = ids.length ? ids[0] : null;
            return fun(firstId,ids);
        }
        return fun();
    });
};

var associateMarketoLead = function (info, fun) {
    marketoClient.setSecurity(MarketoSecurity(marketoId, marketoSecret));
    var attributes = [ ];
    for (key in info) {
        if (info.hasOwnProperty(key)) {
            attributes.push({attrName: key, attrValue: info[key]});
        }
    }
    var params = {leadRecord: {Email: info.Email, leadAttributeList: {attribute:attributes}}, returnLead: true};
    marketoClient.syncLead(params, function(err, result) {
        if (err) {
            console.log("Error associate lead",err,"lead",info);
            fun(err);
        }
        if (!err) {
            return fun(null,result);
        }
        return fun();
    });
};


function getMarketoLead(cookie, fun) {
   return getMarketoLeadFromValueAndType(cookie,"COOKIE",fun);
}

exports.getMarketoLeadFromId = function (id, fun) {
   return getMarketoLeadFromValueAndType(id,"IDNUM",fun);
};

exports.getMarketoLeadFromEmail = function (email, fun) {
   return getMarketoLeadFromValueAndType(email,"EMAIL",fun);
};


function extractIds(result) {
    var leadRecord = result.result.leadRecordList[0];
    if (leadRecord) {
        for (var i = 0; i < leadRecord.leadRecord.length; i++) {
            var id = leadRecord.leadRecord[i]["Id"];
            if (typeof id === "string" || typeof id === "number") return [id];
            if (typeof id === "object" && id.length) {
                return id; // todo return all?
            }
        }
    }
    return [];
}

exports.add_route = function(path,app) {
    app.get(path, function (req, res) {
        var cookie = req.cookies["_mkto_trk"];
        if (cookie) {
            console.log("leads.marketo_cookie",cookie);
            exports.marketo(cookie, function (id,ids) {
                console.log("leads.resolve_cookie",cookie, ids);
                if (id) res.send(200, "" + id);
                else res.send(404, "Unknown");
            })
        } else {
            res.send(500);
        }
    });
    app.post(path, function(req,res) {
        var info = req.body;
        console.log(info);
        associateMarketoLead(info, function(error,data) {
            if (error) {
                console.log(error);
                res.send(500,JSON.stringify(error));
                return;
            }
            res.send(200,JSON.stringify(data));
        })
    })
}

exports.marketo=marketoId && marketoSecret ? getMarketoLead : function(cookie,fun) { return fun() };