"use strict";

const { User } = require('../utils/connect');
const signJwt = require('../functions/signJWT');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
    let { email, password } = req.body;
    User.findOne({ where: { email: email }}).then( async (user) => {
        if ( user ) {
            const match = await bcrypt.compare(password, user.password);
            if ( !match ) {
                return res.status(405).json({
                    message: "Incorrect password."
                });
            }
            else {
                let access_token = await signJwt.access({ type: 'JWT', id: user.id });
                let refresh_token = await signJwt.refresh({ type: 'JWT', id: user.id });
                return res.status(200).json({
                    message: "Authorize success.",
                    access_token,
                    refresh_token,
                    user,
                });
            }
        }
        else {
            return res.status(405).json({
                message: "Unauthorized email.",
            });
        }
    });
}

exports.register = (req, res, next) => {
    let { email, password, username } = req.body;
    User.findOne({ where: { email: email }}).then( async ( email_check ) => {
        if ( email_check ) {
            return res.status(405).json({
                message: "Exist email.",
            });
        }
        else { // 찾는 이메일이 없을 경우 (중복 X)
            if ( username === "" ) {
                return res.status(405).json({
                    message: "Empty username.",
                });
            }
            else if ( email === "" ) {
                return res.status(405).json({
                    message: "Empty email.",
                });
            }
            else if ( password === "" ) {
                return res.status(405).json({
                    message: "Empty password.",
                });
            }
            else {
                const encrypted_pw = await bcrypt.hash(password, 10);

                User.create({
                    username: username,
                    email: email,
                    password: encrypted_pw,
                }).then(() => {
                    return res.status(200).json({
                        message: "Register success.",
                    });
                }).catch((err) => { return res.status(500).json({ err }); });
            }
        }
    });
};

exports.tokenRefresh = (req, res, next) => {
    const refresh_token = req.headers.authorization;
    if(!refresh_token) return res.status(403);
    const access_token = signJwt.issuance(refresh_token, res);
    return res.status(200).json({
        code: 200,
        message: "Token is recreated.",
        access_token: access_token
    });
};