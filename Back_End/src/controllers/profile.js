"use strict";

const { Content } = require("../utils/connect");
const { Comment } = require("../utils/connect");

exports.selfWrittencontent = (req, res) => {
  const { page, limit } = req.query;
  let userkey = req.decoded.id;
  Content.findAndCountAll({
    where: { userkey: userkey },
    limit: parseInt(limit),
    offset: (parseInt(page) - 1) * parseInt(limit),
  })
    .then((data) => {
      return res.status(200).json({
        data: data.rows,
        maxPage: Math.ceil(data.count / parseInt(limit)),
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

exports.selfWrittencomment = (req, res) => {
  const { page, limit } = req.query;
  let userkey = req.decoded.id;
  Comment.findAndCountAll({
    where: { userkey: userkey },
    limit: parseInt(limit),
    offset: (parseInt(page) - 1) * parseInt(limit),
  })
    .then((data) => {
      return res.status(200).json({
        data: data.rows,
        maxPage: Math.ceil(data.count / parseInt(limit)),
      });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

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
