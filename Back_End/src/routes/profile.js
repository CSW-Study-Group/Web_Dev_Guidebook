"use strict";

const express = require('express');
const ctrl = require('../controllers/profile');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get("/userid/:username", ctrl.selfWrittencontent)

module.exports = router;