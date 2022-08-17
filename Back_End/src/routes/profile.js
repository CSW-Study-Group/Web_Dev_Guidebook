"use strict";

const express = require('express');
const ctrl = require('../controllers/profile');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get("/content", verifyJWT, ctrl.selfWrittencontent);
router.get("/comment", verifyJWT, ctrl.selfWrittencomment);

module.exports = router;