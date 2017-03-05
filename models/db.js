var mysql = require('mysql');

/**
 * MySqli Connection Pool Object
 * @type {Pool}
 */

var conn = mysql.createPool({
    host: process.env.MYSQL_HOST || "43.225.55.90",
    user: process.env.MYSQL_USER || "cresezg1_chanx",
    password: process.env.MYSQL_PASS || "shekhar12",
    database: process.env.DATABASE || "cresezg1_laravel"
});

module.exports = conn;