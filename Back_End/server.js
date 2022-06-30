const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Back -> End');
});

app.listen(config.get('server.port'), () => {
    console.log(`Server Running on ${config.get('server.port')} Port!`);
});