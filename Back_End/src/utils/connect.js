const mysql = require("mysql");
const config = require('config');

module.exports = {
    connection: mysql.createConnection({
        host : config.get('mysql.host'),
        user : config.get('mysql.user'),
        password : config.get('mysql.password'),
        database : config.get('mysql.database'),
    }),
};