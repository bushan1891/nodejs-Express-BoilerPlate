var express = require('express');
var router = express.Router();
var appdir = require('app-root-path');
var User = require(appdir+'/app/model/User.js');
var mongoose=require('mongoose');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function (req, res) {
  var nagendra = new User({name:'nagendra',username:'bushan',password:'bushan1891'});

  
  nagendra.save();
  mongoose.model('User').find(function (err, user) {
    res.send(user);
  });
});
// define the about route
router.get('/about', function (req, res) {
  res.send('User about');
});

module.exports = router;