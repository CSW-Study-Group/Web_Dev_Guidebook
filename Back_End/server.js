//"use strict";

//모듈
const express = require('express');
const app = express();

const { sequelize } = require('./src/utils/connect');

const bodyParser = require('body-parser');
const config = require('config');
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

//연결
app.listen(config.get('server.port'), () => { // 서버 연결
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});

sequelize.sync({ force: false }) // DB 연결
    .then(() => {
        console.log("Success connecting DB");
    })
    .catch((err) => {
        console.error(err);
    });