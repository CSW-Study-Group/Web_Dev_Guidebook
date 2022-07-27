"use strict";

const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
                //테이블
                id: { 
                    type: Sequelize.INTEGER,
                    autoIncrement: true, //자동으로 카운트 증가
                    allowNull: false,
                    unique: true, //중복X
                    primaryKey: true
                },
                content: {
                    type: Sequelize.STRING(255),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true, //타임스탬프
                paranoid: true, //del관련
                modelName: 'Comment',
                tableName: 'commentinfo', //이름 확인
                charset: 'utf8',
                collate: 'utf8_general_ci'
            }
        );
    }

    //다른 모델과 관계

}