"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get("/content/userid/:userid", ctrl.contentGetById) // 해당 유저가 작성한 글 제공

router.get("/content/stack/:stack", ctrl.contentGetByStack); // 스택
router.get("/content/stack/:stack/search", ctrl.searchPart); // 스택 - 부분검색
router.get("/content/searchall", ctrl.searchAll); // 전체검색

router.post("/content", verifyJWT, ctrl.contentPost);
router.post("/content/stack/:stack/:contentid", verifyJWT, ctrl.commentPost);

module.exports = router;