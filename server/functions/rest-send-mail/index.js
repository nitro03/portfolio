const config = require('../../config/config.json');
const MailSender = require('../../MailSender/MailSender');

const { transporterOptions } = config;
const ms = MailSender.getInstance(transporterOptions);

exports.handler = async function (event, context) {
    try {
        const body = JSON.parse(event.body);

        const onSuccess = (info) => ({
            statusCode: 200,
            body: JSON.stringify(info),
        });

        const onError = (err) => ({
            statusCode: 500,
            body: JSON.stringify(err),
        });

        return ms.send(body, onSuccess, onError);
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};