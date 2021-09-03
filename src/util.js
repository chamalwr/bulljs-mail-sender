const nodemailer = require('nodemailer')

function sendMail(email) {
    return new Promise((resolve, reject) => {
        let emailOptions = {
            from: 'admin@github.com',
            to: email.sendMail,
            subject: email.subject,
            text: email.text
        };
        let emailConfig = {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                //Get fake mailbox information from : https://ethereal.email/
                user: '', 
                pass: ''
            }
          };
        nodemailer.createTransport(emailConfig).sendMail(emailOptions, (error, info) => {
            if(error) {
                reject(error);
            }else {
                resolve(info);
            }
        });
    });
}

module.exports = { sendMail }