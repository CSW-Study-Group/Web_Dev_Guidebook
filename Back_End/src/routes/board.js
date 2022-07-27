"use strict";

const express = require('express');
const ctrl = require('../controllers/board');

const router = express.Router();

router.post("/content", ctrl.content);
router.get("/content", ctrl.content_g)

module.exports = router;