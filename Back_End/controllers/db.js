"use strict";

const { User } = require('../src/utils/connect');

const output = {
    user_info : async (req, res) => {
        const user_info = await User.findAll();
        const result = [];

        for (const user of Object.values(user_info)) { // values값들만 (errors is not iterable 해결)
            result.push({
            nickname: user.nickname,
            id: user.id,
            psword: user.psword,
            email: user.email
            })
        }

        res.send(result);
    },
};

//const process = {};

module.exports = {
    output,
    //process,
};