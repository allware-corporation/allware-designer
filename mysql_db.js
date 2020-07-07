var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "allware-mysql-staging.cm2ra7hxtxvi.us-west-1.rds.amazonaws.com",
    user: "root",
    password: "gosteve1",
    port : 3306, //port mysql
    database: "clinicals",
});

connection.connect(function(error) {
	if (error) { throw error; }
});

module.exports = connection;