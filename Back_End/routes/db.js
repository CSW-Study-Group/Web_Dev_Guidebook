"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/db');

router.get("/userinfo", ctrl.output.user_info);

router.post("/login", ctrl.process.login);

module.exports = router;