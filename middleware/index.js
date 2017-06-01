var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

// define the home page route
router.get('/', function (req, res) {
  // res.send('Index home page')
  var options = {
  	// host : 'http://localhost',
  	path : '/listofusers',
  	method : 'GET',
  	port : 3000
  }
  var request = http.request(options, function(response){
    var body = ""
    response.on('data', function(data) {
      body += data;
    });
    response.on('end', function() {
      // res.send(JSON.parse(body));
      api_data = JSON.parse(body);
      res.send(api_data.user_info);
    });
  });
  request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });
  request.end();
})

module.exports = router