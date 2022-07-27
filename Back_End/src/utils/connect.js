"use strict";

const Sequelize = require('sequelize');
const config = require('config');
const User = require('../models/user');
const Comment=require('../models/comment');

// new Sequelize를 통해 MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(
    config.get('mysql.database'),
    config.get('mysql.username'),
    config.get('mysql.password'),
    { host: config.get('mysql.host'), dialect: config.get('mysql.dialect') }
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Comment=Comment;

User.init(sequelize);
Comment.init(sequelize);

module.exports = db;