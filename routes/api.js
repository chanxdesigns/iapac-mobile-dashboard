var express = require('express');
var router = express.Router();
var db = require('../models/db');
var moment = require('moment');

/**
 * Get All Project IDs
 */
router.get('/projectids', function (req, res) {
    db.getConnection(function (err, conn) {
        if (err) res.status(500).end(err.message);
        conn.query('SELECT DISTINCT projectid FROM resp_counters ORDER BY created_at DESC', function (err, results) {
            // Release connection
            conn.release();
            if (err) {
                res.status(err.code).end(err.message);
            } else {
                res.json(results);
            }
        });
    })
});

router.get('/countries', function (req, res) {
    db.getConnection(function (err, conn) {
        if (err) res.status(500).end(err.message);
        conn.query('SELECT DISTINCT Country FROM projects_list', function (err, results) {
            // Release connection
            conn.release();
            if (err) {
                res.status(500).end(err.message);
            } else {
                res.json(results);
            }
        })
    });
});


/**
 * Get All Responses of a specific Project ID
 */

router.get('/all/:projectid', function (req, res) {
    db.getConnection(function (err, conn) {
        if (err) res.status(500).end(err.message);
        conn.query('SELECT * FROM resp_counters WHERE projectid = ? ORDER BY created_at DESC', req.params.projectid, function (err, results) {
            // Release connection
            conn.release();
            if (err) {
                res.status(500).end(err.message)
            } else {
                var results = results.map(function (val) {
                    var starttime = moment(val.starttime),
                        endtime = moment(val.enddate);
                    return {
                        projectid: val.projectid,
                        respid: val.respid,
                        status: val.status,
                        country: val.Languageid,
                        ip: val.IP,
                        starttime: starttime.format('ddd, MMM D YYYY, hh:mm A'),
                        endtime: endtime.format('ddd, MMM D YYYY, hh:mm A')
                    }
                });
                res.json(results);
            }
        });
    });
});

router.get('/country/:projectid', function (req, res) {
    db.getConnection(function (err, conn) {
        if (err) res.status(500).end(err.message);
        conn.query('SELECT DISTINCT Languageid FROM resp_counters WHERE projectid = ?', req.params.projectid, function (err, results) {
            if (err) res.status(500).end(err.message);
            // Release connection
            conn.release();
            res.json(results);
        })
    })
});

/**
 * Get Project ID's associated Country/Countries
 */
router.get('/:projectid/:status/:country', function (req, res) {
    var projectid = req.params.projectid,
        status = req.params.status,
        country = req.params.country;

    db.getConnection(function (err, conn) {
        if (err) res.status(500).end(err.message);
        conn.query('SELECT * FROM resp_counters WHERE projectid = ? AND status = ? AND Languageid = ? ORDER BY created_at DESC', [projectid, status, country], function (err, results) {
            // Release connection
            conn.release();
            if (err) {
                res.status(500).end(err.message);
            } else {
                var results = results.map(function (val) {
                    var starttime = moment(val.starttime),
                        endtime = moment(val.enddate);
                    return {
                        projectid: val.projectid,
                        respid: val.respid,
                        status: val.status,
                        country: val.Languageid,
                        ip: val.IP,
                        starttime: starttime.format('ddd, MMM D YYYY, hh:mm A'),
                        endtime: endtime.format('ddd, MMM D YYYY, hh:mm A')
                    }
                });

                res.json(results);
            }
        });
    });
})

module.exports = router;