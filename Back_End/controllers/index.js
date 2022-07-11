"use strict";

const { User } = require('../src/utils/connect');
const sign_jwt = require('../functions/signJWT');

const output = {
    home : (req, res) => {
        res.send("Hello, Here is Back_End");
    },
    user_info : (req, res) => {
        User.findAll()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    test_auth : async (req, res) => {
        try {
            const user_info = await User.findOne({
                attributes: ['nickname', 'email'],
                where: { id: req.decoded.id }
            });
    
            return res.status(200).json({
                code: 200,
                message: "Token authorized.",
                data: {
                    nickname: user_info.nickname,
                    email: user_info.email
                }
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: error.message
            });
        }
    },
};

const process = {
    login : async (req, res) => {
        try {
            const user_info = await User.findOne({ // id로 해당 유저정보 가져옴
                attributes: ['id', 'psword'],
                where: { id: req.body.id }
            });
            
            if(user_info.id === req.body.id && user_info.psword === req.body.psword) { // 로그인 검증 & 성공
                let access_token = sign_jwt.access({ type: 'JWT', id: user_info.id }); // 토큰발행, payload 전달
                let refresh_token = sign_jwt.refresh({ type: 'JWT', id: user_info.id });
                
                return res.status(200).json({
                    code: 200,
                    message: "Token is created.",
                    access_token: access_token,
                    refresh_token: refresh_token
                });
            } else if(user_info.psword !== req.body.psword) { // 비밀번호 틀림
                return res.status(401).json({
                    code: 401,
                    message: "Incorrect password."
                });
            }
        } catch (error) {
            if(error.message === "Cannot read properties of null (reading 'id')") { // 아이디 틀림
                return res.status(401).json({
                    code: 401,
                    message: "Incorrect id."
                });
            }
            return res.status(500).json({ // 서버 오류
                code: 500,
                message: error.message
            });
        }
    },
    logout: (req, res) => {
    
    },
    register : (req, res) => {

    },
    get_token : (req, res) => {
        const refresh_token = req.headers.authorization;
        if(!refresh_token) return res.status(403);
        const access_token = sign_jwt.issuance(refresh_token, res);
        return res.status(200).json({
            code: 200,
            message: "Token is recreated.",
            access_token: access_token
        });
    },
};

module.exports = {
    output,
    process,
};