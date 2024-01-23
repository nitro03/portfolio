const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const MailSender = require('./MailSender/MailSender');
const app = express()

const port = 1234
const {transporterOptions} = config;
const ms = MailSender.getInstance(transporterOptions);

const FRONTEND_PATH = "../build"

app.use(bodyParser.json());
app.use(express.static("build"));

app.post('/rest/send-mail', (req, res) => {
    const body = req.body;
    console.info("podbijam po maila")
    const onError = (err) => {
        console.error(err)
        res.status(500).json(err).send();
    };
    const onSuccess = (info) => {
        res.status(200).json(info).send();
    };

    ms.send(body, onSuccess, onError);
});

app.get('*', (req, res) => {
    console.info("podbijam po html")
    res.sendFile(path.join(__dirname, FRONTEND_PATH, 'index.html'), { headers: { 'Content-Type': 'text/html' }});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});