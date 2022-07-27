"use strict";

const { Content } = require('../utils/connect');
const { User } = require('../utils/connect');

exports.content = (req, res, next) => {
    let { title, content, tag, stack, hit, view, userkey } = req.body;

    Content.create({
        id: null,
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

exports.content_g = (req, res, next) => {
    Content.findAll({
        include: [{
            model: User,
            attributes: ['id'],
            where: {
                id: 2,
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