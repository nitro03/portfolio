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
            this.instance = new MailSender(MailSender.fillCredentials(transporterOptions));
        }

        return this.instance;
    }

    static fillCredentials(transporterOptions) {
        const envMailUser = process.env.MAIL_USER;
        const envMailPass = process.env.MAIL_PASS;
        if (transporterOptions?.auth) {
            if (envMailUser && envMailPass) {
                transporterOptions.auth['user'] = envMailUser;
                transporterOptions.auth['pass'] = envMailPass;
                return transporterOptions;
            }
            console.error('No env variables with mail user and pasword set!');
            return transporterOptions;
        }
        console.error('No auth object in transporterOptions (MailSender)');
        return transporterOptions;
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
