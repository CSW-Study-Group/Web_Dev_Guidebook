"use strict";

const express = require('express');
const ctrl = require('../controllers/board');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get("/content/stack/:stack", ctrl.contentGetByStack); // 스택
router.get("/content/stack/:stack/search", ctrl.searchPart); // 스택 - 부분검색
router.get("/content/searchall", ctrl.searchAll); // 전체검색

router.post("/content/stack/:stack/:contentid", verifyJWT.verifyJwtAndNext, ctrl.commentPost);

router.get("/content/:id", ctrl.contentRead); // Read
router.post("/content", ctrl.contentPost); // Create
router.post("/content/updation/:id", ctrl.contentUpdate); // Update
router.post("/content/deletion/:id", ctrl.contentDelete); // Delete

router.get("/content/:id/auth/user/:userid", ctrl.auth) // 글 작성자 <-(matching)-> 현재 사용자

module.exports = router;