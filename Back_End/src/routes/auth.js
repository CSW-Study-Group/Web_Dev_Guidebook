const express = require('express');
const ctrl = require('../controllers/auth');

const router = express.Router();

router.post("/login", ctrl.login);
router.post("/register", ctrl.register);
router.post("/token/refresh", ctrl.tokenRefresh);
//router.get("/token/auth", auth, ctrl.testAuth); // 토큰 인증 (자료요청)

module.exports = router;