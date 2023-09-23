const nodemailer = require("nodemailer");
const sendMail = (url,subject,email)=>{
            
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "075bct029.bishal@pcampus.edu.np", 
                    pass: "lovers(@@@&&&)",
                },
            });
            
            let mailOptions = {
                from: "075bct029.bishal@pcampus.edu.np", 
                to: email,
                subject: subject,
                text: url,
            };
            
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
}

module.exports = sendMail;