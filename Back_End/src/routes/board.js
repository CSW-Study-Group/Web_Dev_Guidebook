"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.post("/content", verifyJWT, ctrl.content);
router.get("/content/:userid", ctrl.contentByid)

module.exports = router;