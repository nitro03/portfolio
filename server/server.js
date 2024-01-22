const express = require('express')
const serverless = require('serverless-http');
// const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const MailSender = require('./MailSender/MailSender');
const app = express()

const {transporterOptions} = config;
const ms = MailSender.getInstance(transporterOptions);
const router = express.Router();



router.post('/rest/send-mail', (req, res) => {
    const body = req.body;

    const onError = (err) => {
        res.status(500).json(err).send();
    };
    const onSuccess = (info) => {
        res.status(200).json(info).send();
    };

    ms.send(body, onSuccess, onError);
});

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.use(express.static("../client/build"));
app.use(bodyParser.json());
app.use('/', router);

module.exports = app;
module.exports.handler = serverless(app);
