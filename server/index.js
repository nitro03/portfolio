const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const MailSender = require('./MailSender/MailSender');
const app = express()

const port = 1234
const {transporterOptions} = config;
const ms = MailSender.getInstance(transporterOptions);

app.use(express.static("../client/build"));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.post('/rest/send-mail', (req, res) => {
    const body = req.body;

    const onError = (err) => {
        res.status(500).json(err).send();
    };
    const onSuccess = (info) => {
        res.status(200).json(info).send();
    };

    ms.send(body, onSuccess, onError);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});