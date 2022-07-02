"use strict";

const app = require("../server");
const config = require('config');

app.listen(config.get('server.port'), () => {
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});