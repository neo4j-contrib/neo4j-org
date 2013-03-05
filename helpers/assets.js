exports.asset = function(file) {
	// todo check if locally available
	// return "/assets"
	return "https://s3.amazonaws.com/assets.neo4j.org/"+file;
}