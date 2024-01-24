const config = require("./config/config.json");
const MailSender = require("./MailSender/MailSender");
const {transporterOptions} = config;
const ms = MailSender.getInstance(transporterOptions);

module.exports = (req, res) => {
    const body = req.body;

    const onError = (err) => {
        res.status(500).json(err).send();
    };
    const onSuccess = (info) => {
        res.status(200).json(info).send();
    };

    ms.send(body, onSuccess, onError);
};