"use strict";

const { User } = require('../src/utils/connect');
const jwt = require('jsonwebtoken');
const config = require('config');
const SECRET_KEY = config.get('JWT.secret_key');

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
    test_token_auth : async (req, res) => {
        const user_info = await User.findOne({
            attributes: ['nickname', 'email'],
            where: { 
                id: req.decoded.id,
            },
        });
        
        return res.status(200).json({
            code: 200,
            message: "Token authorized.",
            data: {
            nickname: user_info.nickname,
            email: user_info.email
            }
        });
    },
};

const process = {
    login : async (req, res, next) => {
        try {
            //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
            const user_info = await User.findOne({
                attributes: ['id', 'psword'],
                where: { 
                    id: req.body.id,
                },
            });

            if(user_info.id === req.body.id && user_info.psword === req.body.psword) { // 로그인 성공
                let access_token = jwt.sign({
                    type: 'JWT',
                    id: user_info.id,
                    psword: user_info.psword,
                }, SECRET_KEY, {
                    expiresIn: '15m', // 만료시간 15분
                    issuer: config.get('JWT.issuer'),
                });
                
                return res.status(200).json({
                    code: 200,
                    message: "Token is created.",
                    token: access_token
                });
            }
            else if(user_info.psword !== req.body.psword) { // 비밀번호 틀림
                return res.status(409).json({
                    code: 409,
                    message: "Incorrect password.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: error.message,
            });
        }
    },
    logout: (req, res) => {
    
    },
    register : (req, res) => {

    },
};

module.exports = {
    output,
    process,
};