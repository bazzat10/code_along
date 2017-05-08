// make a get request to omdb to get jaws
// display the json in a browser

// you will need
// http, request

// to make a request use the 'request' module
// GET '/' to return jaws json
// https://github.com/request/request
// npm init
// npm install request -- save



var http = require('http');

// var request = require('request');
// request('http://www.omdb', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });



var app = function (req, res) {
  if (req.url === '/'){

    

  res.end();
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  };
};

var server = http.createServer(app);
server.listen(8000);
