"use strict";

const { Content } = require('../utils/connect');
const { Comment } = require('../utils/connect');
const { User } = require('../utils/connect');

const model = require('../utils/connect');
const HitContent = model.sequelize.models.HitContent;

const { Op } = require('sequelize');

// stack에 따른 tag 별 글 데이터들 제공
exports.contentGetByStack = (req, res) => {
    const { stack } = req.params;
    // const { sort } = req.query;
    // let order = null;

    // if (sort === 'hit') { order = [ ['hit', 'DESC'] ]; }
    // else { order = [ ['createdAt', 'DESC'] ]; } // null or other

    Content.findAndCountAll({
        where: { stack: stack },
        order: [ ['createdAt', 'DESC'] ],
    }).then((data) => {
        let tip = new Array();
        let question = new Array();
        let share = new Array();

        for( let i = 0; i < data.count ; i++ ) {
            if (data.rows[i].tag === 'tip') { tip.push(data.rows[i]) }
            else if (data.rows[i].tag === 'question') { question.push(data.rows[i]) } 
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

// stack page에서의 하위 검색 후, 페이지를 제한
exports.searchPart = (req, res) => { // username, content, title 조건 검색
    // body{ type: "검색조건" , content: "검색어"} 형태
    const { stack, tag } = req.params;
    let { type, content, sort, page, limit } = req.query;
    let where_user, where_content, order = null;

    if ( type === 'username' ) { // 검색조건 username => User model에서 찾음. where_user 사용
        where_user = {
            [type]: {[Op.like]: '%'+content+'%'}
        }
        where_content = {[Op.and]: [
            { stack: stack},
            { tag: tag },
        ]}
    } else { // 그 외 검색조건 Content model에서 찾음. where_content 사용
        if(type === undefined) {
            where_content = {[Op.and]: [
                { stack: stack},
                { tag: tag },
            ]}
        } else {
            where_content = {[Op.and]: [
                { stack: stack},
                { tag: tag },
                {[type]: {[Op.like]: '%'+content+'%'}}
            ]}
        }
    }

    if (sort === 'hit') { order = [ ['hit', 'DESC'] ]; }
    else { order = [ ['createdAt', 'DESC'] ]; } // null or other

    page = !isNaN(page)?page:1;
    limit = !isNaN(limit)?limit:10;

    Content.findAndCountAll({
        include:[{
            model: User,
            where: where_user,
            order: order
        }],
        where: where_content,
        order: order,
        limit: Math.max(1, parseInt(limit)),
        offset: (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit))
    }).then((data) => {
        return res.status(200).json({ 
            data: data.rows,
            maxPage: Math.ceil(data.count / Math.max(1, parseInt(limit)))
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};

// 어디서든 전체 검색 후, 페이지를 제한
exports.searchAll = (req, res) => { // username, content, title 조건 검색
    // body{ type: "검색조건" , content: "검색어"} 형태
    let { type, content, sort, page, limit } = req.query;
    let where_user, where_content, order = null;

    if ( type === 'username' ) { // 검색조건 username => User model에서 찾음. where_user 사용
        where_user = {[type]: {[Op.like]: '%'+content+'%'}};
    } else { // 그 외 검색조건 Content model에서 찾음. where_content 사용
        where_content = {[type]: {[Op.like]: '%'+content+'%'}};
    }

    if (sort === 'hit') { order = [ ['hit', 'DESC'] ]; }
    else { order = [ ['createdAt', 'DESC'] ]; } // null or other

    page = !isNaN(page)?page:1;
    limit = !isNaN(limit)?limit:10;

    Content.findAndCountAll({
        include:[{
            model: User,
            where: where_user,
            order: order
        }],
        where: where_content,
        order: order,
        limit: Math.max(1, parseInt(limit)),
        offset: (Math.max(1, parseInt(page)) - 1) * Math.max(1, parseInt(limit))
    }).then((data) => {
        return res.status(200).json({ 
            data: data.rows,
            maxPage: Math.ceil(data.count / Math.max(1, parseInt(limit)))
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};

// 작성글 보기 
exports.contentRead = (req, res) => {
    let contentid = req.params.contentid;

    Content.findOne({ 
        include:[{
            model: Comment,
            required: false, // associated model이 존재하는 객체만을 Return 하지않도록 강제한다.
            where: { contentkey: contentid }
        }],
        where: { id: contentid },
    }).then((data) => {
        return res.status(200).json({ 
            code: 200,
            data: data,
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });

    Content.increment({ view: 1 }, { where: {id: {[ Op.eq ]: contentid }}});
}

// 글 작성
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
            userkey: userid
        }).then(() => {
            return res.status(200).json({ 
                code: 200,
                message: "Content post success."
            });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};

// 글 수정
exports.contentUpdate = (req, res) => {
    let { title, content, tag, stack } = req.body;
    let contentid = req.params.contentid;

    if(!title || !content) {
        return res.status(400).json({
            message: "Please enter title or content."
        });
    } else {
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
                message: "Content update success."
            });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
}

// 글 삭제
exports.contentDelete = (req, res) => {
    Content.destroy({where: { id: req.params.contentid }})
    .then(() => {
        return res.status(200).json({ 
            code: 200,
            message: "Content delete success."
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

// 인증
exports.auth = (req, res) => {
    let userid = req.params.userid;
    let contentid = req.params.contentid;

    Content.findOne({ 
        attributes: ['userkey'],
        where: { id: contentid }
    })
    .then((data) => {
        if( parseInt(userid) === data.userkey ) {
            return res.status(200).json({ 
                code: 200,
                message: "Auth success."
            });
        } else {
            return res.status(401).json({ 
                code: 401,
                message: "Auth fail."
            });
        }
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}

// 댓글 작성
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
                message: "Comment post success."
            });
        }).catch((err) => {
            return res.status(500).json({ err });
        });
    }
};

// 추천
exports.contentHit = (req, res) => {
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
                    message: "Hit success."
                });
            }).catch((err) => {
                return res.status(500).json({ err });
            });

            Content.increment({ hit: 1 }, { where: {id: {[ Op.eq ]: contentid }}});
        }
        else {
            HitContent.destroy({ 
                where: { 
                    UserId: userkey,
                    ContentId: parseInt(contentid)
                }
            }).then(() => {
                return res.status(200).json({ 
                    code: 200,
                    message: "Hit delete."
                });
            }).catch((err) => { 
                return res.status(500).json({ err });
            });

            Content.increment({ hit: -1 }, { where: { id: {[ Op.eq ]: contentid }}});
        }
    }).catch((err) => {
        return res.status(500).json({ err });
    });
};
