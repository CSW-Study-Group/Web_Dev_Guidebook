"use strict";

const { User } = require('../src/utils/connect');

const output = {
    user_info : async (req, res) => {
        await User.findAll()
            .then((response) => {
                res.send(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

//const process = {};

module.exports = {
    output,
    //process,
};