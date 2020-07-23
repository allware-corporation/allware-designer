// var mysql = require('mysql');
// var clinical_connection = mysql.createConnection({
//     host: "ec2-54-215-156-187.us-west-1.compute.amazonaws.com",
//     user: "sa",
//     password: "SSPnet1!",
//     port : 3306, //port myclinicals
//     database: "IDB"
// });

// clinical_connection.connect(function(error) {
// 	if (error) { throw error; }
// });

// var Connection = require('tedious').connect
// var config = {
//   server: 'BigBoom',
//   options: {
//       database: 'clinicals',
//       trustServerCertificate: true,
//   },
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'root',
//           password: 'fjdlkgjrjd',
//       }
//   }
// }
// var clinical_connection = new Connection(config);
// clinical_connection.on('connect', function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(11);
//   }
// });
// module.exports = clinical_connection;

var sql = require('mssql');
// var config = {
// 	user: 'allware',
// 	password: 'fjdlkgjrjd',
//     server: 'localhost', 
//     database: 'clinicals' 
// };
var config = {
	user: 'allapi',
	password: 'api',
    server: 'allware.us', 
    database: 'IDB',
    options: {
    	encrypt: false,
    } 
};
module.exports = config;

// var sql = require('mssql');
// var config = {
//   user: 'sa',
//   password: 'SSPnet1!',
//   server: '54.215.156.187', 
//   database: 'IDB' 
// };
// module.exports = config;