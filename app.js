var express = require('express');
var app = express();

app.get('/:file', function(req, res){
	console.log(req.param('file'));
	if (req.param('file') == 'favicon.ico') return res.send(200);
	res.sendfile(req.param('file'), function(err){
		if (err) console.log(err);
	})
});
app.get('/public/js/libs/:file', function(req, res){
	console.log(req.param('file'));
	res.sendfile('public/js/libs/' + req.param('file'), function(err){
		if (err) console.log(err);
	})
});
app.get('/public/js/controllers/:file', function(req, res){
	console.log(req.param('file'));
	res.sendfile('public/js/controllers/' + req.param('file'), function(err){
		if (err) console.log(err);
	})
});
app.get('/public/css/:file', function(req, res){
	console.log(req.param('file'));
	res.sendfile('public/css/' + req.param('file'), function(err){
		if (err) console.log(err);
	})
});

// http://localhost:8080/public/js/libs/angular.js

app.listen(8080);