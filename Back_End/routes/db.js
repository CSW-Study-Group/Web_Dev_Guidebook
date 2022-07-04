"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/db');

router.get("/userinfo", ctrl.output.user_info);

module.exports = router;