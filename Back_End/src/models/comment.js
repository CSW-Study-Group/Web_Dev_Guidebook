"use strict";

const Sequelize=require('sequelize');

module.exports=class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init(
            {
                //테이블
                id: { //이름확인 필요
                    type: Sequelize.INTEGER,
                    autoIncrement: true, //자동으로 카운트 증가
                    allowNull: false,
                    unique: true, //중복X
                    primaryKey: true
                    //more?
                },
                content: {
                    type: Sequelize.STRING(255),
                    allowNull: false,
                    //more?
                },
                /*
                deleted: { //이름 확인필요
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    //more?
                },
                */
            },
            {
                sequelize,
                timestamps: true, //확인필
                modelName: 'Comment',
                tableName: 'comments', //이름 확인
                paranoid: true, //확인필
                charset: 'utf8',
                collate: 'utf8_general_ci'
            }
        );
    }

    //다른 모델과 관계

}