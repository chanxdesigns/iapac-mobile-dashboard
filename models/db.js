var mysql = require('mysql');

    /**
     * MySqli Connection Object
     * @type {Connection}
     */

var conn = mysql.createConnection({
    host: process.env.MYSQL_HOST || "43.225.55.90",
    user: process.env.MYSQL_USER || "cresezg1_chanx",
    password: process.env.MYSQL_PASS || "shekhar12",
    database: process.env.DATABASE || "cresezg1_laravel",
    timeout: 40000
});

/**
 * Initiate Connection
 */

conn.connect(function (err) {
    if (err) res.status(500).end(err.message);
})

module.exports = conn;