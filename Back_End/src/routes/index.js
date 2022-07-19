"use strict";

const { auth } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

router.post("/login", ctrl.login); // 토큰 발급
router.post("/token/refresh", ctrl.tokenRefresh); // 토큰 재발급
//router.get("/token/auth", auth, ctrl.testAuth); // 토큰 인증 (자료요청)

module.exports = router;
