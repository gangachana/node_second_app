var express = require('express');
var app = express();
var mongoose = require('mongoose');// mongodb package
var expressValidator = require('express-validator'); // express validation package
var bodyParser = require('body-parser'); // express package for req.body in user.js controller
var path = require('path'); // path package
var cookieParser = require('cookie-parser');//Third-party middleware
var index = require('./middleware/index'); // including and calling middleware function file named as index.js
var http = require('http');
var request = require('request');

mongoose.connect("localhost:27017/nodesecondapi");// connect to database

app.use(bodyParser.json());// using req.body in user.js controller 
app.use(bodyParser.urlencoded({ extended: true }));// using req.body in user.js controller
app.use(expressValidator()); // using express validator
app.use(cookieParser());//load the cookie-parsing middleware
app.use('/', index);// url /birds and /birds/about

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// catch 404 error
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// (Access-Control-Allow-Origin)
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.listen(4000, function () {
  console.log('Second app listening on port 4000!')
})

module.exports = app;