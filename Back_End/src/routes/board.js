"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.post("/content", verifyJWT, ctrl.content);
router.get("/content/:userid", ctrl.contentByid) // 해당 유저가 작성한 글 제공

router.get("/searchAll",ctrl.searchAll);//전체검색

module.exports = router;