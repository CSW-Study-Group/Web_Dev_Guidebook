"use strict";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');
const db = require('./config/db');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Back -> End');
});


app.get("/users", (req, res) => {
    db.connection.query( `SELECT * FROM users`, (err, results)=>{
        if(err) console.log(err);
        res.send(results);
    });
});

app.listen(config.get('server.port'), () => {
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});

