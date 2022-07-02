"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/db');

router.get("/users", ctrl.output.users);

module.exports = router;