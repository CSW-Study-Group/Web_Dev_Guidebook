"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("../controllers");

router.get("/", ctrl.output.home);

module.exports = router;
