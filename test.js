var filesYo = require('fs');
var https = require('https')

filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");

var imageURL = "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/13501817_10154457995368394_8038246663945941517_n.jpg?oh=733449e612efb8af73aed5d60411e4f1&oe=58ABF5C4";
var dogFile = filesYo.createWriteStream(__dirname + "/node_dog.jpg");

var request = https.get(imageURL, function(response) {
	response.pipe(dogFile);
});

