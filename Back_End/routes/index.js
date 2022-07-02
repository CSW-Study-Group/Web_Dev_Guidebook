"use strict";

const express = require("express");
const router = express.Router();
const db = require('../src/utils/connect');

router.get("/", (req, res) => {
    res.send('Hello, Back -> End');
});

router.get("/users", (req, res) => {
    db.connection.query( `SELECT * FROM users`, (err, results)=>{
        if(err) console.log(err);
        res.send(results);
    });
});

module.exports = router;
