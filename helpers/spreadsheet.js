var GoogleClientLogin = require("googleclientlogin").GoogleClientLogin;
var GoogleSpreadsheets = require("hooky-spreadsheets");

var googleAuth = new GoogleClientLogin({
    email: process.env.AUTH_EMAIL,
    password: process.env.AUTH_PASS,
    service: 'spreadsheets',
    accountType: GoogleClientLogin.accountTypes.google
});

var authId;

exports.googleLogin = function(cb) {
	googleAuth.on(GoogleClientLogin.events.login, function () {
	    authId = googleAuth.getAuthId()
	    console.log("googleAuth",authId);
		cb();
	});
	googleAuth.login();
}

exports.load = function(spreadsheetId,fun) {
   if (!authId) return;
   GoogleSpreadsheets({ key: spreadsheetId, auth:authId }, fun );
};