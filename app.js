// Node boiler plate 
// Express app 

var express = require('express');
var app = express();
var mongoose=require('mongoose');
var path = require('path');
var appdir = require('app-root-path');
var user = require(appdir +'/app/routes/api/user.js');
// __dirname gisves the current directory name 

app.use('/user', user);
// GET method route
app.get('/', function (req, res) {
    console.log('this is get ')
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });


// configuration of mongoose 
// connection url 
mongoose.connect('mongodb://localhost/user');



app.set('port', process.env.PORT || 3000);
// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);
console.log('listing on the port ' + app.get('port'));
app.listen(app.get('port'));