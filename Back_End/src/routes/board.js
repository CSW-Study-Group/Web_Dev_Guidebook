"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get("/content/userid/:userid", ctrl.contentGetById) // 해당 유저가 작성한 글 제공
router.get("/content/stack/:stack", ctrl.contentGetByStack);

router.post("/content", verifyJWT, ctrl.contentPost);

router.get("/content/searchall", ctrl.searchAll); // 전체검색
router.get("/content/stack/:stack/searchstack", ctrl.searchStack); // 스택검색

module.exports = router;