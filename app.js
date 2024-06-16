
const nodemailer = require('nodemailer')
require('dotenv').config()


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vv354564@gmail.com',
        pass: process.env.PW
    }
});

const mailOptions = {
    from: 'vv354564@gmail.com',
    to: 'veenanandan.svj@gmail.com',
    subject: 'Sending Email with Nodemailer',
    text: 'This is the plain text body of the email.'
};

transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})
