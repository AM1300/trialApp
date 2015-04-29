var express = require('express');
var path    = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var msg = 'Returning message from backEnd';
  res.send(msg);
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../templates', 'about.html'));
});

module.exports = router;
