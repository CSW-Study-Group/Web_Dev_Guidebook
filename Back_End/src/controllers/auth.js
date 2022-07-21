"use strict";

const { User } = require('../utils/connect');
const signJWT = require('../functions/signJWT');

exports.login = (req, res, next) => {
    let { email, password } = req.body;
    User.findOne({ where: { email: email }}).then( async (user) => {
        if ( user ) {
            /* 이슈 1. 암호화로 비밀번호 검증하는 코드 삽입해야함. 일단 if문으로 대체 */
            if ( password !== user.password ) {
                return res.status(405).json({
                    message: 'Incorrect password'
                });
            }
            else {
                let accessToken = await signJWT.access({ type: 'JWT', email: user.email });
                let refreshToken = await signJWT.refresh({ type: 'JWT', email: user.email });
                return res.status(200).json({
                    message: "Authorize success",
                    accessToken,
                    refreshToken,
                    user,
                });
            }
        }
        else {
            return res.status(405).json({
                message: "Unauthorized email",
            });
        }
    });
}

exports.register = (req, res, next) => {
    let { email, password, username } = req.body;
    User.findOne({ where: { email: email }}).then(( existVerify ) => {
        if ( existVerify ) {
            return res.status(405).json({
                message: "Exist email",
            });
        }
        else { // 찾는 이메일이 없을 경우 (중복 X)
            if ( email === "" ) {
                return res.status(405).json({
                    message: "Empty id",
                });
            }
            else if (password === "") {
                return res.status(405).json({
                    message: "Empty password",
                });
            }
            /* else if () { ... } 로 비밀번호 검증 로직 만들기 */
            /* 비밀번호 암호화 필요 */
            else {
                User.create({
                    id: null,
                    username: username,
                    email: email,
                    password: password,
                }).then((user) => {
                    return res.status(200).json({
                        user
                    });
                }).catch((err) => {
                    return res.status(500).json({
                        err
                    });
                });
            }
        }
    });
};

exports.tokenRefresh = (req, res, next) => {
    const refresh_token = req.headers.authorization;
    if(!refresh_token) return res.status(403);
    const access_token = signJWT.issuance(refresh_token, res);
    return res.status(200).json({
        code: 200,
        message: "Token is recreated.",
        access_token: access_token
    });
};