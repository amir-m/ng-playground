var express = require('express');
var app = express();
var mongoose = require('mongoose');
var MemoryStore = require('connect');
var modules = {
	Emails: require('./Models/Emails.js')(mongoose)
};
app.configure(function(){
	app.use(express.favicon());
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));	
	app.use(express.limit('1mb'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({
		secret: "NG APP Secret Key",
		// store: new MemoryStore()
	}));
	// app.use(app.router);
	mongoose.connect("mongodb://localhost/ng", function(err){
		if (err) throw err;
	});
});

app.use(function(req, res, next){
	// console.log(req.headers);
	req.session.id = 'amir';
	if (req.cookies['connect.sid']) console.log(req.cookies['connect.sid']);
	next();
});

app.get('/', function(req, res){
		// console.log('he is: %s', req.session.id);
	res.sendfile('login.html', function(err){
		if (err) return console.log(err);
	});
});

app.get('/:file', function(req, res){
	console.log(req.param('file'));
	if (req.param('file') == 'favicon.ico') return res.send(200);
	res.sendfile(req.param('file'), function(err){
		if (err) console.log(err);
	});
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

app.listen(8080);
console.log('Listening on Port 8888');