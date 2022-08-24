"use strict";

const express = require('express');
const ctrl = require('../controllers/auth');
const token = require('../middleware/verifyJWT');
const router = express.Router();

router.post("/login", ctrl.login);
router.post("/register", ctrl.register);

router.get("/token/verify", token.verifyJwt);
router.post("/token/refresh", ctrl.tokenRefresh);

module.exports = router;