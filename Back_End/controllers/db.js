"use strict";

const { User } = require('../src/utils/connect');
const jwt = require('jsonwebtoken');
const config = require('config');
const SECRET_KEY = config.get('JWT.secret_key');

const output = {
    user_info : (req, res) => {
        User.findAll()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    token_auth : (req, res) => {
        const nickname = req.decoded.nickname;
        const profile = req.decoded.profile;
        
        return res.status(200).json({
            code: 200,
            message: '토큰은 정상입니다.',
            data: {
            nickname: nickname,
            profile: profile
            }
        });
    },
};

const process = {
    login : async (req, res, next) => {
        //받은 요청의 id와 password로 DB에서 프로필사진, 닉네임 등 로그인 정보를 가져온다.
        const user_info = await User.findOne({
            attributes: ['id', 'psword'],
            where: { 
                id: req.body.id,
            },
        });

        //console.log(req.headers.authorization);

        let token = jwt.sign({
            type: 'JWT',
            id: user_info.id,
            psword: user_info.psword,
        }, SECRET_KEY, {
            expiresIn: '15m', // 만료시간 15분
            issuer: 'csw',
        });
    
        //response
        return res.status(200).json({
            code: 200,
            message: "토큰이 발급되었습니다.",
            token: token
        });
    }
};

module.exports = {
    output,
    process,
};