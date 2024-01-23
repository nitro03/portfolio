const nodemailer = require('nodemailer');

class MailSender {
    MY_MAIL = 'kbartosik90@gmail.com';

    constructor(transporterOptions) {
        this.transporterOptions = transporterOptions;

        this.transporter = nodemailer.createTransport({
            ...this.transporterOptions
        });
    }

    static getInstance(transporterOptions) {
        if (!this.instance) {
            this.instance = new MailSender(transporterOptions);
        }

        return this.instance;
    }

    prepareMailData(body) {
        const {senderMail, senderName, msg, date} = body;

        const html = `<h1>Message from: <b>${senderName}</b></h1>
                    <h2 style='color: #ccc'> Created at: <b>${date}</b> </h2>
                    <h3>Sender mail: ${senderMail}</h3>
                    <p>${msg}</p>`;

        return {
            from: senderMail,  // sender address
            to: this.MY_MAIL,   // list of receivers
            subject: 'Ktoś chce się skontaktować',
            html,
        };
    }

    async send(body, onSuccess, onError) {
        const mailData = this.prepareMailData(body);
        console.info('processing msg: ', body);

        try {
            await this.transporter.sendMail(mailData, function (err, info) {
                if (err) {
                    console.error('error while sending msg: ', err);
                    onError(err);
                } else {
                    console.info('message successfully sent: ', info);
                    onSuccess(info);
                }

            });
        } catch (e) {
            return onError(e);
        }

    }
}

module.exports = MailSender;
