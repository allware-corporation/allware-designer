var connection = require('../mysql_db');
exports.index = function(req, res){

  // req.getConnection(function(err,connection){   
    connection.query('SELECT * FROM home',function(err,rows)
    {
        if(err)
            console.log("Error Selecting : %s ",err );
        console.log('Database connected');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(rows));
      });
  //});
};
exports.list = function(req, res){

  //req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM home',function(err,rows)
        {
          console.log("Call List");
            if(err)
                console.log("Error Selecting : %s ",err );
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows));
           
         });
  //  });
  
};
/*Save the upload image*/
exports.uploadImage = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    
    //req.getConnection(function (err, connection) {
        var id = input.id;
        var mainImg = JSON.stringify(input.mainImg);
        var data = {
          mainImg: mainImg,
        }
        var query = connection.query("UPDATE home set ? WHERE id = ? ",[data,id], function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/customers');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('success'));
        });
    //});
};
/*Save the selected Main image*/
exports.updateSelectedMainImg = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    //req.getConnection(function (err, connection) {
        var id = input.id;
        var selectedMainImg = input.selectedMainImg;
        var data = {
          selectedMainImg: selectedMainImg,
        }
        var query = connection.query("UPDATE home set ? WHERE id = ? ",[data,id], function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/customers');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('success'));
        });
    //});
};
/*Save the selected Color*/
exports.updateSelectedColor = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    //req.getConnection(function (err, connection) {
        var id = input.id;
        var selectedColor = input.selectedColor;
        var data = {
          selectedColor: selectedColor,
        }
        var query = connection.query("UPDATE home set ? WHERE id = ? ",[data,id], function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/customers');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('success'));
        });
    //});
};
/*Save the selected App ID*/
exports.updateSelectedAppId = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    //req.getConnection(function (err, connection) {
        var id = input.id;
        var selectedAppId = input.selectedAppId;
        var data = {
          selectedAppId: 0,
        }
        var query = connection.query("UPDATE home set ? ",[data], function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
        });
        var data = {
          selectedAppId: selectedAppId,
        }
        console.log(id);
        var query = connection.query("UPDATE home set ? WHERE id = ? ",[data,id], function(err, rows)
        {
          if (err)
              console.log("Error inserting : %s ",err );
         
          //res.redirect('/customers');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('success'));
        });
    //});
};