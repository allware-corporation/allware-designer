
/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require("fs");


var clinicals = require('./routes/clinicals'); 
var registry = require('./routes/registry'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
// app.set('port', process.env.PORT || 4300);
app.set('port', process.env.PORT || 5500);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, './public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

// app.use(
    
//   connection(mysql,{
//     host: "myclinicals-test.cgw0fempjlcm.us-east-2.rds.amazonaws.com",
//     user: "admin",
//     password: "iO267twPhlTY5Zo04qTQ",
//     port : 3306, //port mysql
//     database: "clinicals"
//   },'request') //or single

// );


/*------------------------------------------
    myclinicals connection:
  -------------------------------------------
  connection(myclinicals,{
    host: "ec2-54-215-156-187.us-west-1.compute.amazonaws.com",
    user: "sa",
    password: "",
    port : 3306, //port myclinicals
    database: "IDB"
  },'request') //or single

  -- to get registries use: SELECT * FROM vMY_PAGE_GROUP
  -- more to follow
-------------------------------------------*/





/* GET Home-Screen page */
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + './index.html'));
// });

app.get('/clinicals', clinicals.list);
app.post('/clinicals/uploadImage', clinicals.uploadImage);
app.post('/clinicals/updateSelectedMainImg', clinicals.updateSelectedMainImg);
app.post('/clinicals/updateSelectedColor', clinicals.updateSelectedColor);
app.post('/clinicals/updateSelectedAppId', clinicals.updateSelectedAppId);
app.get('/registry', registry.list);
app.get('/registry/leftSideMenu', registry.leftSideMenu);
app.get('/registry/grid', registry.grid);
app.post('/registry/uploadImage', registry.uploadImage);
app.post('/registry/changeMainImg', registry.changeMainImg);

//app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
