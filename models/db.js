var mysql = require('mysql');

/**
 * MySqli Connection Pool Object
 * @type {Pool}
 */

var conn = mysql.createPool({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "",
    database: process.env.DATABASE || "test_iapac"
});

module.exports = conn;