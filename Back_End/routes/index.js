"use strict";

const { auth } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers');

router.get("/", ctrl.output.home);

router.get("/userinfo", ctrl.output.user_info);

router.post("/login", ctrl.process.login); // 토큰 생성
router.get("/login_auth", auth, ctrl.output.test_token_auth); 
// 토큰 인증 (무언가의 로그인이 필요한 자료) : 여기서는 nickname, email자료를 필요로하는 페이지라고 가정
// 사용자에게 토큰인증이 되면, payload에 자료를 담아서 보내줌 (다만, 유출돼선 안되는 중요한건 X)

module.exports = router;
