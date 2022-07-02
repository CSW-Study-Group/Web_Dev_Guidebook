"use strict";

//모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//라우팅
const home = require('./routes');
const db = require('./routes/db');

//웹세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", home);
app.use("/db", db);

module.exports = app;
