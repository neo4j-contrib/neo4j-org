var soap = require('soap'),
    MarketoSecurity = require('marketo-soap-security').MarketoSecurity,
    wsdlUrl = 'https://na-l.marketo.com/soap/mktows/1_7?WSDL';

var marketoId = process.env.MARKETO_ID;
var marketoSecret = process.env.MARKETO_SECRET;

var marketoClient;
soap.createClient(wsdlUrl, function(err, client) {
    if (client) {
        // console.log(client.describe());
        marketoClient = client;
    }
    if (err) {
        console.log("Error creating soap client for Marketo", err);
    }
});

function getMarketoLead(cookie, fun) {
    marketoClient.setSecurity(MarketoSecurity(marketoId, marketoSecret));
    marketoClient.getLead({leadKey: {keyType: "COOKIE", keyValue:cookie}}, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (!err && result) {
            // console.log(JSON.stringify(result),err);
           return fun(extractId(result));
        }
//   console.log(client.lastRequest);
        return fun();
    });
}

function extractId(result) {
    var leadRecord = result.result.leadRecordList[0];
    if (leadRecord) {
        for (var i = 0; i < leadRecord.leadRecord.length; i++) {
            var id = leadRecord.leadRecord[i]["Id"];
            if (id && id.length) {
                return id[0]; // todo return all? 
            }
        }
    }
    return null;
}

exports.marketo=marketoId && marketoSecret ? getMarketoLead : function(cookie,fun) { return fun() };