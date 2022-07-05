"use strict";

const config = require('config');
const { auth } = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/db');

router.get("/userinfo", ctrl.output.user_info);
router.get("/login_auth", auth, ctrl.output.token_auth);

router.post("/login", ctrl.process.login);

module.exports = router;