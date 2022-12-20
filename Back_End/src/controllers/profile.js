"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');
const { User } = require('../utils/connect');

const model = require('../utils/connect');
const HitContent = model.sequelize.models.HitContent;

const { Op } = require('sequelize');

const bcrypt = require('bcrypt');

exports.selfWrittenContent = (req, res) => {
    let { page, limit } = req.query;
    let userkey = req.decoded.id;

    page = !isNaN(page)?page:1;
    limit = !isNaN(limit)?limit:10;

    Content.findAndCountAll({
        where: { userkey: userkey },
        limit: Math.max(1, parseInt(limit)),
        offset: (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit))
    })
        .then((data) => {
            return res.status(200).json({
                data: data.rows,
                maxPage: Math.ceil(data.count / Math.max(1, parseInt(limit)))
            });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        });
};

exports.selfWrittenComment = (req, res) => {
    let { page, limit } = req.query;
    let userkey = req.decoded.id;

    page = !isNaN(page)?page:1;
    limit = !isNaN(limit)?limit:10;

    Comment.findAndCountAll({
        where: { userkey: userkey },
        limit: Math.max(1, parseInt(limit)),
        offset: (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit))
    })
        .then((data) => {
            return res.status(200).json({
                data: data.rows,
                maxPage: Math.ceil(data.count / Math.max(1, parseInt(limit)))
            });
        })
        .catch((err) => {
            return res.status(500).json({ err });
        });
};

exports.userHitContent = (req, res) => {
    let userkey = req.decoded.id;

    HitContent.findAll({ 
        attributes: ['ContentId'],
        where: { UserId: userkey }
    }).then((data) => {
        let content_id = [];
        for (let x = 0; x < data.length; x++) content_id.push(data[x].ContentId);
        if (content_id.length === 0) {
            return res.status(404).json({ 
                code: 404,
                message: "There is no data.",
            });
        }

        Content.findAll({ 
            where: { id: { [Op.or]: content_id } },
        }).then((data) => {
            return res.status(200).json({ 
                code: 200,
                data: data,
            });
        })
    }).catch((err) => {
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
    let image;
    if(req.file) image = req.file.location;
    let { username, password, re_password } = req.body; 
    let id = req.decoded.id;

    if(!username) { 
        return res.status(400).json({ // 이름이 공백으로 보내진경우
            message: "Please enter username."
        });
    }

    User.findOne({ where: { username: {[ Op.eq ]: username }}})
    .then(( name_check ) => {
        if ( name_check && name_check.id !== id ) {
            //이름중복인경우
            return res.status(405).json({
                message: "Name is already use."
            });
        } else {
            // 이름중복 X
            User.findOne({ where: {id: {[ Op.eq ]: id }}})
            .then(async (profile) => {
                if ( !image ) { image = profile.image; } 

                if (!password) { 
                        User.update({
                            username: username,
                            profile: image,
                        },{ where: {id: id} }
                    ).then(( data ) => {
                        return res.status(200).json({ message: "Profile changed." });
                    }).catch(( err ) => {
                        return res.status(500).json({ err });
                    });
                } else if ( password !== re_password ) {
                    return res.status(400).json({
                        message: "Incorrect password."
                    });
                } else {            
                    const encrypted_pw = await bcrypt.hash(password, 10);
                    
                    User.update({
                            username: username,
                            password: encrypted_pw,
                            profile: image,
                        },{ where: {id: id} }
                    ).then(( data ) => {
                        return res.status(200).json({ message: "Profile changed." });
                    }).catch(( err ) => {
                        return res.status(500).json({ err });
                    });
                }
            });
        }
    });
};
