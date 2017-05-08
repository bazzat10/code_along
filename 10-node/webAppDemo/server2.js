// a route
// /about
// response for this route
// just string 'about me'


// second route
// /donate
// response for this route
// a file that contains html

// modules you will need
// http, fs, optionally url
// http.createServer()
// fs.readFile()
// url.parse() optional

var http = require('http');
var fs = require('fs');
var url = require('url'); // optional

var app = function (request, response) {

  // look at the request and work out what they want
  // request.path
  // make a repsonse based on request

  // response.writeHead(302, {Location: '/about'});
  // response.write('about me');
  // response.end();
  console.log(request.url);
  if (request.url === '/about') {
    response.write('about me');
    response.end();
  } else if (request.url === '/donate'){
    fs.readFile('donate.html', function(err, buffer) {
      if(err) {
      }
      response.write(buffer.toString());
      response.end(); // must do this becuase of the readFile being async
    });
  } else {
      response.writeHead(404);
      response.write('not found');
      response.end();
  }
};
//
// var request = request.path('/about');
var server = http.createServer(app);
server.listen(8000);
