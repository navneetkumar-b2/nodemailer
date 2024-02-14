const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();
console.log("mail send through" ,process.env.EMAIL)

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD // Your email password
    }
});



cron.schedule('*/1 * * * *', () => {
    // Your task logic here
    const currentTime = new Date();
const currentTimeString = currentTime.toLocaleTimeString('en-US', {timeZone: 'Asia/Kolkata'});

let mailOptions = {
    from: 'navneetkumar.motivation@gmail.com', // Sender address
    to: ['cec234051.it.cec@cgc.edu.in'], // Array of receiver addresses
    subject: `Hello time is ${currentTimeString}`,
    text: `This is an automated email sent from Node.js backend. current time is ${currentTimeString} . its just a mail to check the working of my script `
};
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('messageId : %s', info.messageId);
        console.log(`mail send successfully at ${currentTimeString}`);
    });
    console.log('This task runs every mins');

  
});
