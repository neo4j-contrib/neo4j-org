var geoip = new require('maxmind-native').GeoIP('data/GeoIP.dat');

var regions={ 'DE': ['DE','AT','CH'],
			  'EU': ["DZ", "LU", "BH", "MT", "BY", "MC", "BE", "MA", "BA", "NL", "CY", "NG", "EG", "OM", "FI", "PK", "FR", "PL", "QA", "GH", "RU", "GG", "ZA", "IE", "ES", "IM", "SE", "IT", "JO", "SY", "KZ", "TN", "KE", "TR", "KW", "UA", "LB", "AE", "LI", "GB","UK"],
			  'US' : ['US','CA']
}
function region(ipOrCountry) {
	var country = ipOrCountry.length==2 ? ipOrCountry.toUpperCase() : geoip.getCountry(ipOrCountry, 'code');
//	console.log(country,ipOrCountry);
	for (var region in regions) {
		if ( regions[region].indexOf(country) != -1 ) return region;
	}
	return 'US'; // or WORLD ?
}

exports.region = region
exports.country = function(ip) { return geoip.getCountry(ip, 'code'); }

