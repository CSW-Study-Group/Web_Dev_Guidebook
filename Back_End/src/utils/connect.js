"use strict";

const Sequelize = require('sequelize');
const config = require('config');

const User = require('../models/user');
const Content = require('../models/content');
const Comment = require('../models/comment');

// new Sequelize를 통해 MySQL 연결 객체를 생성한다.

const host = 'aws' // mysql, aws

const sequelize = new Sequelize(
    config.get('aws.database'),
    config.get('aws.username'),
    config.get('aws.password'),
    { host: config.get('aws.host'), dialect: config.get('aws.dialect'), port: config.get('aws.port') }
);

const db = {};

db.sequelize = sequelize;

db.User = User;
db.Content = Content;
db.Comment = Comment;

User.init(sequelize);
Content.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Content.associate(db);
Comment.associate(db);

module.exports = db;