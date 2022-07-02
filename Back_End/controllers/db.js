"use strict";

const db = require('../src/utils/connect');

const output = {
    users : (req, res) => {
        db.connection.query( `SELECT * FROM users`, (err, results)=>{
            if(err) console.log(err);
            res.send(results);
        });
    },
};

//const process = {};

module.exports = {
    output,
    //process,
};