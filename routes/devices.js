var express = require('express');
var mysql = require('mysql');
var path    = require('path');

var router = express.Router();

router.get('/all', function(req, res, next) {

  var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'ebill',
    user: 'lamprini',
    password: '12345'
  });

  connection.connect();

  connection.query('SELECT * FROM devices', function(err, rows, fields) {
    if (err){
      throw err;
    }
    else{
    // console.log('The solution is: ', rows);
    // res.send(rows);  na min exw 2 response sti seira, giati vgazei minuma lathous "Error: can't set headers after they are send"
    res.json(rows);
    }
  });
});

router.get('/list', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../templates', 'all_devices.html'));
});


module.exports = router;
