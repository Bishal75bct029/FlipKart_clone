const jwt = require("jsonwebtoken");
const UserSchema = require("../model/user");
const forgetPassword = async (request, response) => {
  const email = request.query.email;
  if (email) {
    try{

        const user = await UserSchema.findOne({ email: email });
        console.log(user, "User");
        if (user) {
            let token = jwt.sign({ email: email }, "forgetPassword", {
                expiresIn: "10m",
            });
            let passResetLink = `http://localhost:8000/reset_password?token=${token}&email=${email}`;
            console.log(passResetLink);
            
            let nodemailer = require("nodemailer");
            
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
                subject: "Forget Password Link",
                text: passResetLink,
            };
            
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
            
            return response.status(200).json({ message: "Email sent" });
        }
        return response.status(400).json({ message: "No user exist" });
    }catch(error){
        return response.status(500).json({message:"Server Error"})
    }
  }
  return response.status(400).json({ message: "No email sent" });
};

const resetPassword = (request,response)=>{
    email = request.query.email;
    token = request.query.token;
    if(email && token){
        jwt.verify(token,'forgetPassword',(error,success)=>{
            if(success){
                return response.status(200).json({message:"nice one"})
            }
            
            console.log('error',error);
            return response.status(404).json({message:"Invalid Link"})
        })
    }
    return response.status(400).json({message:"No email or token provided"})
}

const passwordChanged = async(request,response) =>{
    const email = request.body.email;
    const password = request.body.password;
    const token = request.body.token;
    if(email && password && token){
        let updatedPassword = await UserSchema.findOneAndUpdate({email:email},{password:password},{new:true})
        return response.status(200).json({message:"Successfully updated",'updated':updatedPassword})
    }
    return response.status(404).json("Sorry unable to change")
    
}
module.exports = {forgetPassword,resetPassword,passwordChanged};
