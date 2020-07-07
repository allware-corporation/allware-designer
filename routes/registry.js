var connection = require('../mysql_db');
//const sql = require("mssql");
var sql = require("mssql");
var config = require('../mssql_db');
exports.list = function(req, res){

  sql.connect(config, function(err) {
    if (err) { console.log(err); }
    var request = new sql.Request();
    request.query('select * from registry', function(err, data) {
      if (err) { console.log(err); }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data.recordset));
    })
  })
  
};

//Get LeftSideMenu
exports.leftSideMenu = function(req, res){

  sql.connect(config, function(err) {
    if (err) { console.log(err); }
    var request = new sql.Request();
    request.query('select * from LeftSideMenu', function(err, data) {
      if (err) { console.log(err); }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data.recordset));
    })
  })
  // var query = connection.query('SELECT * FROM leftSideMenu',function(err,rows)
  // {
  //     if(err)
  //         console.log("Error Selecting : %s ",err );
  //     res.setHeader('Content-Type', 'application/json');
  //     res.send(JSON.stringify(rows));
  //  });
};

//Get Grid
exports.grid = function(req, res){
  var query = connection.query('SELECT * FROM grid',function(err,rows)
  {
      if(err)
          console.log("Error Selecting : %s ",err );
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(rows));
   });
};
/*Save the upload image*/
exports.uploadImage = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.id;
    var mainImg = JSON.stringify(input.mainImg);
    var data = {
      mainImg: mainImg,
    }
    var query = connection.query("UPDATE registry set ? WHERE id = ? ",[data,id], function(err, rows)
    {
      if (err)
          console.log("Error inserting : %s ",err );
     
      //res.redirect('/customers');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify('success'));
    });
};
/*Save the changeMainImg*/
exports.changeMainImg = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var id = input.id;
    var imgUrl = input.imgUrl;
    console.log(input.selectedImgId);
    if (input.selectedImgId == 1) {
      var data = {
        img1: imgUrl,
      };
    } else {
      var data = {
        img2: imgUrl,
      };
    }
    var query = connection.query("UPDATE registry set ? WHERE id = ? ",[data,id], function(err, rows)
    {
      if (err)
          console.log("Error inserting : %s ",err );
     
      //res.redirect('/customers');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify('success'));
    });
};