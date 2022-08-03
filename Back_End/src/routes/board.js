"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.post("/content", verifyJWT, ctrl.content);
router.get("/content/:userid", ctrl.contentById) // 해당 유저가 작성한 글 제공
router.get("/stack", ctrl.boardStack);

module.exports = router;