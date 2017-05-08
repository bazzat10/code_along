console.log('JS Connected ....')

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('welcome to express. Express is like Sinatra');
});

app.get('/about', function (req, res) {
  res.send('about me');
});

module.exports = app;
