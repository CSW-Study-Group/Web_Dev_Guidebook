"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');
const { User } = require('../utils/connect');
const model = require('../utils/connect');
const HitContent = model.sequelize.models.HitContent;
const { Op } = require('sequelize');


exports.contentGetByStack = (req, res) => {
    const { stack } = req.params;
    const { sort } = req.query;
    let order = null;

    if (sort === "hit") { order = [ ['hit', 'DESC'] ]; }
    else { order = [ ['createdAt', 'DESC'] ]; } // null or other

    Content.findAndCountAll({
        where: { stack: stack },
        order: order,
    }).then((data) => {
        let tip = new Array();
        let question = new Array();
        let share = new Array();

        for( let i = 0; i < data.count ; i++ ) {
            if(data.rows[i].tag === "tip") { tip.push(data.rows[i]) }
            else if(data.rows[i].tag === "question") { question.push(data.rows[i]) } 
            else { share.push(data.rows[i]) } // share
        }

        return res.status(200).json({ 
            tip: tip,
            question: question,
            share: share
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};

exports.searchPart = (req, res) => { // username, content, title 조건 검색
    // body{ type: "검색조건" , content: "검색어"} 형태
    const { stack } = req.params;
    const { type, content, sort, page, limit } = req.query;
    let where_user, where_content, order = null;

    if ( type === "username" ) { // 검색조건 username => User model에서 찾음. where_user 사용
        where_user = {
            stack: stack,
            [type]: {[Op.like]: "%"+content+"%"}
        }
    } else { // 그 외 검색조건 Content model에서 찾음. where_content 사용
        where_content = {
            stack: stack,
            [type]: {[Op.like]: "%"+content+"%"}
        }
    }

    if (sort === "hit") { order = [ ['hit', 'DESC'] ]; }
    else { order = [ ['createdAt', 'DESC'] ]; } // null or other


    Content.findAndCountAll({
        include:[{
            model: User,
            where: where_user,
            order: order
        }],
        where: where_content,
        order: order,
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
};

exports.searchAll = (req, res) => { // username, content, title 조건 검색
    // body{ type: "검색조건" , content: "검색어"} 형태
    const { type, content, sort, page, limit } = req.query;
    let where_user, where_content, order = null;

    if ( type === "username" ) { // 검색조건 username => User model에서 찾음. where_user 사용
        where_user = {[type]: {[Op.like]: "%"+content+"%"}};
    } else { // 그 외 검색조건 Content model에서 찾음. where_content 사용
        where_content = {[type]: {[Op.like]: "%"+content+"%"}};
    }

    if (sort === "hit") { order = [ ['hit', 'DESC'] ]; }
    else { order = [ ['createdAt', 'DESC'] ]; } // null or other

    Content.findAndCountAll({
        include:[{
            model: User,
            where: where_user,
            order: order
        }],
        where: where_content,
        order: order,
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
};

exports.contentRead = (req, res) => {
    Content.findOne({ where: { id: req.params.contentid } })
    .then((data) => {
        return res.status(200).json({ 
            code: 200,
            data: data
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

exports.contentPost = (req, res, next) => {
    let { title, content, tag, stack, userid } = req.body;

    // 사용자가 title, content입력 안할시 오류 발생
    if(!title || !content) {
        return res.status(400).json({
            message: "Please enter title or content."
        });
    } else {
        Content.create({
            title: title,
            content: content,
            tag: tag,
            stack: stack,
            hit: 0,
            view: 0,
            userkey: userid
        }).then(() => {
            return res.status(200).json({ 
                code: 200,
                message: "content post success."
            });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};

exports.contentUpdate = (req, res) => {
    let { title, content, tag, stack } = req.body;
    let contentid = req.params.contentid;

    Content.update({
        title: title,
        content: content,
        tag: tag,
        stack: stack,
    }, {
        where: { id: contentid },
    }).then(() => {
        return res.status(200).json({ 
            code: 200,
            message: "content update success."
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

exports.contentDelete = (req, res) => {
    Content.destroy({where: { id: req.params.contentid }})
    .then(() => {
        return res.status(200).json({ 
            code: 200,
            message: "content delete success."
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

exports.auth = (req, res) => {
    let userid = req.params.userid
    let contentid = req.params.contentid;

    Content.findOne({ 
        attributes: ['userkey'],
        where: { id: contentid }
    })
    .then((data) => {
        if(parseInt(userid) === data.userkey) {
            return res.status(200).json({ 
                code: 200,
                message: "auth success."
            });
        } else {
            return res.status(401).json({ 
                code: 401,
                message: "auth fail."
            });
        }
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

exports.commentPost = (req, res, next) => {
    let { content } = req.body;
    let contentid = req.params.contentid;
    let userkey = req.decoded.id;

    // 사용자가 title, content입력 안할시 오류 발생
    if(!content) {
        return res.status(400).json({
            message: "Please enter content."
        });
    } else {
        Comment.create({
            content: content,
            userkey: userkey,
            contentkey: parseInt(contentid)
        }).then(() => {
            return res.status(200).json({ 
                code: 200,
                message: "comment post success."
            });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};

exports.hit = (req, res) => {
    let contentid = req.params.contentid;
    let userkey = req.decoded.id;

    HitContent.findOne({ where: { 
        UserId: {[ Op.eq ]: userkey },
        ContentId: {[ Op.eq ]: contentid }
    }}).then((hit_check) => {
        if ( hit_check === null ) {
            HitContent.create({
                UserId: userkey,
                ContentId: parseInt(contentid)
            }).then(() => {
                return res.status(200).json({ 
                    code: 200,
                    message: "hit success."
                });
            }).catch((err) => {
                return res.status(500).json({ err });
            });
        }
        else {
            HitContent.destroy({ 
                where: { 
                    ContentId: contentid,
                    UserId: userkey
                }
            }).then(() => {
                return res.status(200).json({ 
                    code: 200,
                    message: "hit delete."
                });
            }).catch((err) => {
                return res.status(500).json({ err });
            });
        }
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};
