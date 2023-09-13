//install npm package nodemailer using command "npm i nodemailer"
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bishal@gmail.com',//Your sending gmail address here 'For example if you want to send mail from bishal@gmail.com you should mention it here',
    pass: 'your password here'//the password of sending gmail address like if you have mention sender adderss as bishal@gmail.com, then you should write its password here
  }
});

var mailOptions = {
  from: 'bishal@gmail.com',//this email address is same as you mention in user section of transporter. if you provide any other gmail than user section google smtp will automatically replace it with the gmail address from user section of transporter
  to: 'bishalReciever@gmail.com',//This is recieving email address
  subject: 'Practicing Node js mail sending Bishal Lamichhane',
  text: 'Hello Brother mail sending is so easy through npm package nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});