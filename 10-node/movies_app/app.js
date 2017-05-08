var express = require('express');
var request = require('request');
var path = require('path');// help me build paths dir s / par of the EJS package
var engine = require('ejs-mate');
var app = express();


// where are the temmplates?
app.set('views', path.join(__dirname,'views'));
// app.set('views', '/views')

// what kind of templates?
app.engine('ejs', engine); // alternate to handlebars
app.set('view engine', 'ejs');


// use a middleware / middleware are just functions
// static asset
app.use( express.static(path.join(__dirname, 'public') ) )

function logger(req, res, next) {
  // console.log('%s request %s from %s', req.method, req.path, req.ip)
  console.log('${req.method}) request ${req.path} from ${req.ip}');
  next();
};

app.use(logger);


// app.get('/', function(req, res){
//   request('http://www.omdbapi.com/?t=jaws', function(error, omdbResponse, body){
//     // res.json(JSON.parse(body)); // passing in a string and turning it to a javascript object.
//
//     var movie = JSON.parse(body);
//
//     res.render('home', {
//       className: 'fullslack',
//       title: movie.Title
//     });
//   });
// });

app.get('/', function(req, res){

  var title = req.query.title

  console.log(title);

  request('http://www.omdbapi.com/?t='+ title, function(error, omdbResponse, body){
    // res.json(JSON.parse(body)); // passing in a string and turning it to a javascript object.

    var movie = JSON.parse(body);

    res.render('home', {
      className: 'fullslack',
      title: movie.Title
    });
  });
});


function search(req, res){
  res.render('search');
};

function movies(req, res){
  var title = req.query.title;
};

app.get('/search', search);
app.get('/movies', movies);
app.get('/title/:title', function(req, res){
  res.send(req.params.title);
});

module.exports = app;
