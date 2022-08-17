"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');
const { User } = require('../utils/connect');
const { Op }=require('sequelize');

exports.contentGetById = (req, res, next) => {
    User.findAll({
        include: [{
            model: Content,
            attributes: ['id','title','content'],
            where: { userkey: req.params.userid }
        }]
    }).then((data) => {
        return res.status(200).json({ data });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};

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

exports.contentPost = (req, res, next) => {
    let { title, content, tag, stack } = req.body;
    let userkey = req.decoded.id;

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
            userkey: userkey
        }).then((data) => {
            return res.status(200).json({ data });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};

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
            contentkey: contentid
        }).then((data) => {
            return res.status(200).json({ data });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};