"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');
const { User } = require('../utils/connect');
const { Op } = require('sequelize');

exports.selfWrittenContent = (req, res) => {
    const { page, limit } = req.query;
    let userkey = req.decoded.id;
    Content.findAndCountAll({
        where: { userkey: userkey },
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit)
    })
        .then((data) => {
            return res.status(200).json({
                data: data.rows,
                maxPage: Math.ceil(data.count / parseInt(limit))
            });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        });
};

exports.selfWrittenComment = (req, res) => {
    const { page, limit } = req.query;
    let userkey = req.decoded.id;
    Comment.findAndCountAll({
        where: { userkey: userkey },
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit)
    })
        .then((data) => {
            return res.status(200).json({
                data: data.rows,
                maxPage: Math.ceil(data.count / parseInt(limit))
            });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        });
};

exports.profileUpdate = (req, res) => {
    /* body
    {
        username
        password 
        re_password
        decoded{id} => JWT 통과이후
    }
    */
    let { username, password, re_password } = req.body; 
    let id = req.decoded.id;

    User.findOne({ where: { username: {[ Op.eq ]: username }}})
    .then(( name_check ) => {
        if ( !name_check || name_check.id !== id ) {
            //이름중복인경우
            return res.status(405).json({
                message: "Name is already use or name is empty."
            });
        } else {
            // 이름중복 X
            User.findOne({ where: {id: {[ Op.eq ]: id }}})
            .then((profile) => {
                if ( !password ) { password = profile.password; } 
                else { 
                    if ( password !== re_password ) {
                        return res.status(405).json({
                            message: "Incorrect password."
                        });
                    }
                }
                User.update({
                        username: username,
                        password: password
                    },{ where: {id: id} }
                )
                .then(( data ) => {
                    return res.status(200).json({ data });
                })
                .catch(( err ) => {
                    return res.status(500).json({ err });
                });
            });
        }
    });
};
