"use strict";

const express = require("express");
const ctrl = require("../controllers/profile");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

//router.get("/userid/:username", ctrl.selfWrittencontent);
router.post("/userid/:username/profilechange", verifyJWT, ctrl.changeProfile);

module.exports = router;
