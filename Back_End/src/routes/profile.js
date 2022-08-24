"use strict";

const express = require('express');
const ctrl = require('../controllers/profile');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get("/content", verifyJWT.verifyJwtAndNext, ctrl.selfWrittenContent);
router.get("/comment", verifyJWT.verifyJwtAndNext, ctrl.selfWrittenComment);

router.post("/updation", verifyJWT.verifyJwtAndNext, ctrl.profileUpdate);

module.exports = router;
