"use strict";

const { Content } = require('../utils/connect');
const { User } = require('../utils/connect');

exports.content = (req, res, next) => {
    let { title, content, tag, stack } = req.body;
    let userkey = req.decoded.id;

    // 사용자가 title, content입력 안할시 오류 발생
    if(!title || !content) {
        return res.status(400).json({
            message: "Please enter title or content.",
        });
    } else {
        Content.create({
            title: title,
            content: content,
            tag: tag,
            stack: stack,
            hit: 0,
            view: 0,
            userkey: userkey
        }).then((data) => {
            return res.status(200).json({
                data
            });
        }).catch((err) => {
            return res.status(500).json({
                err
            });
        });
    }
};

exports.contentByid = (req, res, next) => {
    User.findAll({
        include: [{
            model: Content,
            attributes: ['id','title','content'],
            where: {
                userkey: req.params.userid,
            }
        }]
    }).then((data) => {
        return res.status(200).json({
            data
        });
    }).catch((err) => {
        return res.status(500).json({
            err
        });
    });
};