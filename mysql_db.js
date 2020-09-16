var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: "allware-mysql-staging.cm2ra7hxtxvi.us-west-1.rds.amazonaws.com",
//     user: "root",
//     password: "gosteve1",
//     port : 3306, //port mysql
//     database: "clinicals",
// });
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Potenza@1234",
    port : 3306, //port mysql
    database: "clinicals",
});
// var connection = {
//     user: 'allapi',
//     password: 'api',
//     server: 'mymobile.sspnet.com',
//     database: 'clinicals',
//     options: {
//     encrypt: false
//     }
//     };
    // var connection = mysql.createConnection({
    //     user: 'allapi',
    //     password: 'api',
    //     server: 'mymobile.sspnet.com',
    //     database: 'clinicals',
    //     options: {
    //     encrypt: false
    //     }
    // });
connection.connect(function(error) {
    if (error) { throw error; }
});
module.exports = connection;