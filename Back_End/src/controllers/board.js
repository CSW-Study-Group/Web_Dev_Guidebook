"use strict";

const { Content } = require('../utils/connect');
const { User } = require('../utils/connect');

exports.content = (req, res, next) => {
    let { title, content, tag, stack, hit, view } = req.body;
    let userkey = req.decoded.id;

    Content.create({
        title: title,
        content: content,
        tag: tag,
        stack: stack,
        hit: hit,
        view: view,
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