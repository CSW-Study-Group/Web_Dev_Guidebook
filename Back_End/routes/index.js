"use strict";

const { auth } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

router.get("/", ctrl.output.home);

router.get("/userinfo", ctrl.output.user_info);

router.post("/login", ctrl.process.login); // 토큰 발급
router.get("/test_auth", auth, ctrl.output.test_auth); // 토큰 인증 (자료요청)
router.post("/token/refresh", ctrl.process.token_refresh); // 토큰 재발급
/* 토큰 인증 (로그인이 필요한 자료요청) : 여기서는 nickname, email자료를 받는 페이지라고 가정
사용자에게서 토큰인증이 되면, 자료(nickname, email)를 담아서 보내줌 */

module.exports = router;
