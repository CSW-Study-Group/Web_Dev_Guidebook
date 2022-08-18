"use strict";

const { Content } = require("../utils/connect");
const { User } = require("../utils/connect");
const { Op } = require("sequelize");
/*
exports.selfWrittencontent = (req, res) => {
  User.findAll({
    attributes: ["id"],
    where: { username: req.params.username },
  })
    .then((data) => {
      Content.findAll({
        where: { userkey: data },
      })
        .then((req) => {
          return res.status(200).json({ req });
        })
        .catch((error) => {
          return res.status(500).json({ error });
        });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};*/

exports.changeProfile = (req, res) => {
  /*body
    {
        username
        password
        check_pw
        decoded{id} => JWT 통과이후
    }*/
  const { username, password, check_pw } = req.body;
  const id = req.decoded.id;
  if (password) {
    //비밀번호 포함된 변경
    let check = password === check_pw;
    if (check) {
      User.update(
        {
          username: username,
          password: password,
        },
        {
          where: { id: id },
        }
      )
        .then((data) => {
          return res.status(200).json({ data });
        })
        .catch((err) => {
          return res.status(500).json({ err });
        });
    } else {
      //비번확인이 다른경우
      return res.status(405).json({
        message: "Incorrect password",
      });
    }
  } else {
    //비밀번호 제외 변경
    User.update(
      {
        username: username,
      },
      {
        where: { id: id },
      }
    )
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => {
        return res.status(500).json({ err });
      });
  }
};
