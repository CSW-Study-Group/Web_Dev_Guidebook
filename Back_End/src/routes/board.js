"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get("/content/stack/:stack", ctrl.contentGetByStack); // 스택
router.get("/content/stack/:stack/:tag/search", ctrl.searchPart); // 스택 - 부분검색
router.get("/content/searchall", ctrl.searchAll); // 전체검색

router.get("/content/:contentid", ctrl.contentRead); // Read
router.post("/content", ctrl.contentPost); // Create
router.post("/content/updation/:contentid", ctrl.contentUpdate); // Update
router.post("/content/deletion/:contentid", ctrl.contentDelete); // Delete
router.post("/content/hit/:contentid", verifyJWT.verifyJwtAndNext, ctrl.contentHit); // hit

router.get("/content/:contentid/auth/user/:userid", ctrl.auth) // 글 작성자 <-(matching)-> 현재 사용자

router.post("/content/:contentid/comment", verifyJWT.verifyJwtAndNext, ctrl.commentPost);

module.exports = router;