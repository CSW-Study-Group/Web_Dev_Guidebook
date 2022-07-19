"use strict";

const { User } = require('../utils/connect');
const sign_jwt = require('../functions/signJWT');

exports.login = async (req, res) => {
    try {
        const user_info = await User.findOne({ // id로 해당 유저정보 가져옴
            attributes: ['email', 'password'],
            where: { email: req.body.email }
        });
        
        if(user_info.email === req.body.email && user_info.password === req.body.password) { // 로그인 검증 & 성공
            let access_token = sign_jwt.access({ type: 'JWT', email: user_info.email }); // 토큰발행, payload 전달
            let refresh_token = sign_jwt.refresh({ type: 'JWT', email: user_info.email });
            
            return res.status(200).json({
                code: 200,
                message: "Token is created.",
                access_token: access_token,
                refresh_token: refresh_token
            });
        } else if(user_info.password !== req.body.password) { // 비밀번호 틀림
            return res.status(401).json({
                code: 401,
                message: "Incorrect password."
            });
        }
    } catch (error) {
        if(error.message === "Cannot read properties of null (reading 'email')") { // 아이디 틀림
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
}

exports.register = async (req, res) => {
    if(req.body.username && req.body.email && req.body.password) {
        const [user, created] = await User.findOrCreate({ // 조건에 맞는 데이터 찾고 없으면 생성
            where: { email: req.body.email }, // email 중복생성 X 를 위함
            defaults: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        });
        if (created) { // created(데이터 생성의 성공유무)
            return res.status(200).json({
                code: 200,
                message: "User create success.",
            });
        }
        else {
            return res.status(401).json({
                code: 401,
                message: "Email already exist.",
            });
        }
    }
    else {
        return res.status(401).json({
            code: 401,
            message: "Input is void.",
        });
    }
}

exports.tokenRefresh = (req, res) => {
    const refresh_token = req.headers.authorization;
    if(!refresh_token) return res.status(403);
    const access_token = sign_jwt.issuance(refresh_token, res);
    return res.status(200).json({
        code: 200,
        message: "Token is recreated.",
        access_token: access_token
    });
}