"use strict";

const express = require("express");
const ctrl = require("../controllers/profile");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.post("/userid/:username/profilechange", verifyJWT.verifyJwtAndNext, ctrl.changeProfile);

module.exports = router;
