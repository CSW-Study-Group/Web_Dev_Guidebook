"use strict";

// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');
const cors = require('cors');
const app = express();

const { sequelize } = require('./src/utils/connect');

// 라우팅
const authRouter = require('./src/routes/auth');
const boardRouter = require('./src/routes/board');
const profileRouter = require('./src/routes/profile');

// 웹세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRouter);
app.use("/board", boardRouter);
app.use("/profile", profileRouter);
app.use(express.static(path.join(__dirname, '../Front_End/build')));

// 연결
app.get("/", (req, res) => { // 첫 화면
    res.sendFile(path.join(__dirname, '../Front_End/build/index.html'));
});

app.listen(config.get('server.port'), () => { // 서버 연결
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});

sequelize.sync({ force: false }).then(() => { // DB 연결
    console.log("Success connecting DB");
}).catch((err) => {
    console.error(err);
});