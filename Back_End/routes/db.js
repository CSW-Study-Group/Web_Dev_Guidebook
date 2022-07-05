"use strict";

const config = require('config');
const { auth } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/db');

router.get("/userinfo", ctrl.output.user_info);

router.post("/login", ctrl.process.login); // 토큰 생성
router.get("/login_auth", auth, ctrl.process.token_auth); // 토큰 인증

module.exports = router;