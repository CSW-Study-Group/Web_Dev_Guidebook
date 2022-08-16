"use strict";

const { Content } = require('../utils/connect');
const { User } = require('../utils/connect');

exports.selfWrittencontent = (req, res) => {
    User.findAll({
        attributes: ['id'],
        where: { username: req.params.username }
    }).then((data) => {
        Content.findAll({
            where: { userkey: data }
        }).then((req) => {
            return res.status(200).json({ req });
        }).catch((error) => {
            return res.status(500).json({ error });
        });
    }).catch((err) => {
        return res.status(500).json({ err });
    });
}