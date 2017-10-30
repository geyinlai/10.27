var express = require('express');
var router = express.Router();
var mysql     =require('mysql');
var connection = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"220118",
  database:"item"
})


/* GET home page. */
router.get('/list', function(req, res, next) {
  connection.query("SELECT id,name FROM baobao", function (err, rows, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send(rows)
  })
})
router.post('/datail', function(req, res, next) {
  var id1=req.body.id
  res.header('Access-Control-Allow-Origin',"*")

  connection.query("SELECT datal FROM baobao where id="+id1,function(err, rows, fields){


    res.send(rows)
  })
})

module.exports = router
