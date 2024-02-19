var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/app/harjotus', function(request, response) {
    response.send('I am example');
    console.log('I am example');
  });
  
  app.get('/app/:name', function(request, response) {
    response.send('Hello ' + request.params.name);
  });
  
  app.get('/app/:firstName/:lastName', function(request, response) {
    response.send('Hello ' + request.params.firstName + " " + request.params.lastName);
  });
  
  
  app.use(function(req, res, next) {
    console.log('The common middleware called');
    next();
  });
  
  app.use('/app', function(req, res, next) {
    console.log('The example middleware called');
    next();
  });

   app.post('/', function(request, response) {
    response.send(request.body);
    console.log(request.body);
  });

  app.listen(3000, function () {
    console.log('App is listening on port 3000!');
  });

  module.exports = app;