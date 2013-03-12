var fs = require('fs');
var $ = require('jquery');
var contents = require('./helpers/content.js');

//var jsonText = fs.readFileSync('./helpers/content.js', 'UTF-8');
//var jsonObj = JSON.parse(jsonText);

//console.log(contents);

var types = ['tracks', 'videos', 'articles', 'links', 'images'];

var rootUrl = 'http://localhost:8082/structr/rest/';



$.each(types, function(i, type) {
	//console.log(contents.content[type]);

	var objects = contents.content[type];

	if (objects) {

		$.each(Object.keys(objects), function(j, key) {

			var obj = objects[key];
			obj.name = key;
			var json = JSON.stringify(obj);
			console.log("doImport "+ obj);
		    $.ajax({
		        url: rootUrl + type,
		        //headers: headers,
		        type: 'POST',
		        dataType: 'json',
		        data: json,
		        contentType: 'application/json; charset=utf-8',
		        //async: false,
		        success: function(data, status, xhr) {
		        	console.log(type + ' successfully created');
		        },
		        error: function(data, status, xhr) {
		        	//console.log('Creation of ' + type + ' failed', data);
		        }
		    });

		});

	}
});

