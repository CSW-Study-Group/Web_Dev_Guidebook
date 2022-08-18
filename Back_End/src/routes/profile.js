"use strict";

const express = require("express");
const ctrl = require("../controllers/profile");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.get("/content", verifyJWT.verifyJwtAndNext, ctrl.selfWrittencontent);
router.get("/comment", verifyJWT.verifyJwtAndNext, ctrl.selfWrittencomment);

router.post("/profilechange", verifyJWT.verifyJwtAndNext, ctrl.changeProfile);

module.exports = router;
