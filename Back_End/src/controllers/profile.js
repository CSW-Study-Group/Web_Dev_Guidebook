"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');

exports.selfWrittencontent = (req, res) => {
    const { page, limit } = req.query;
    let userkey = req.decoded.id;
    Content.findAndCountAll({
        where: { userkey: userkey },
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit)
    }).then((data) => {
        return res.status(200).json({ 
            data: data.rows,
            maxPage: Math.ceil(data.count / parseInt(limit))
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

exports.selfWrittencomment = (req, res) => {
    const { page, limit } = req.query;
    let userkey = req.decoded.id;
    Comment.findAndCountAll({
        where: { userkey: userkey },
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit)
    }).then((data) => {
        return res.status(200).json({ 
            data: data.rows,
            maxPage: Math.ceil(data.count / parseInt(limit))
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}