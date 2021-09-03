const Queue = require('bull')
const util  = require('./util');

const sendMailQueue = new Queue('mailSender', {
    redis: {
        host: '', //Redis instance IP if running remote or localhost
        port: 6379,
        password: '' //Redis password
    }
});

const emailData = {
    senderEmail : "testuser@somedomain.com",
    subject: 'Checking Mails',
    text: 'Email is received successfully!'
}

const options = {
    delay: 5000, //Delay 5 Seconds 
    attempts: 3 //Retry 3 times if failed
}

sendMailQueue.add(emailData, options);
sendMailQueue.process(async job => {
    return await util.sendMail(job.data);
});