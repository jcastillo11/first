
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index', {
		title : 'Bienvenidos'
	});
});

app.get('/services', function(req, res){
	res.render('services', {
		title : "Primera maravilla del mundo"
		
	});
});

app.get('/maravilla2', function(req, res){
	res.render('maravilla2', {
		title : "Segunda maravilla del mundo"
		
	});
});

app.get('/maravilla3', function(req, res){
	res.render('maravilla3', {
		title : "Tercera maravilla del mundo"
		
	});
});

app.get('/maravilla4', function(req, res){
	res.render('maravilla4', {
		title : "Cuarta maravilla del mundo"
		
	});
});

app.get('/maravilla5', function(req, res){
	res.render('maravilla5', {
		title : "Quinta maravilla del mundo"
		
	});
});

app.get('/maravilla6', function(req, res){
	res.render('maravilla6', {
		title : "Sexta maravilla del mundo"
		
	});
});

app.get('/maravilla7', function(req, res){
	res.render('maravilla7', {
		title : "Septima maravilla del mundo"
		
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});








