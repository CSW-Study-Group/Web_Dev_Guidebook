"use strict";

const jwt = require('jsonwebtoken');
const config = require('config');
const ACCESS_SECRET_KEY = config.get('JWT.access_secret_key');
const REFRESH_SECRET_KEY = config.get('JWT.refresh_secret_key');

const sign_jwt = {
    access(payload) {
        return jwt.sign(payload, ACCESS_SECRET_KEY, {
            expiresIn: '15m',
            issuer: config.get('JWT.issuer'),
        });
    },
    refresh(payload) {
        return jwt.sign(payload, REFRESH_SECRET_KEY, {
            expiresIn: '180d',
            issuer: config.get('JWT.issuer'),
        });
    }
}

module.exports = sign_jwt;