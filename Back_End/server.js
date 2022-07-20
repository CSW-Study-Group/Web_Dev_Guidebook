const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const { sequelize } = require('./src/utils/connect');
const apiRouter = require('./src/routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", apiRouter);

app.listen(config.get('server.port'), () => { // 서버 연결
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});

sequelize.sync({ force: false }).then(() => {
    console.log("Success connecting DB");
}).catch((err) => {
    console.error(err);
});