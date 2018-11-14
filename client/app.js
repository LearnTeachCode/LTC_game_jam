const http = require('http');
const express = require('express');
const app  = express();
const path = require('path');

//open port for game to be played on
var sitePath = process.argv[2] || "client";
var port = 7777;
var address = "http://localhost:";

var gameRoute = path.join(__dirname, sitePath);
gameRoute = path.normalize(gameRoute);



//request logging
app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.use(express.static(gameRoute));

app.listen(port, noArgs => {
    console.log(`Server running at: ${gameRoute}`);
});
