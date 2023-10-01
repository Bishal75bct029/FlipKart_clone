const jwt = require("jsonwebtoken");
const UserSchema = require("../model/user");
const sendMail = require("../functions/sendMail");
const bcrypt = require('bcrypt');

const forgetPassword = async (request, response) => {
  const email = request.query.email;
  console.log(email,'hole hole sajna')
  if (email) {
    try{

        const user = await UserSchema.findOne({ email: email });
        console.log(user, "User");
        if (user) {
            let token = jwt.sign({ email: email }, "forgetPassword", {
                expiresIn: "30m",
            });
            let passResetLink = `http://localhost:5173/reset_password?token=${token}&email=${email}`;
            console.log(passResetLink);
            
            sendMail(passResetLink,"Passport Reset Link Sent Successfully",email);
            
            return response.status(200).json({ message: "Password reset link sent successfully. Please check you mail to reset the password link" });
        }
        return response.status(400).json({ message: "No user exist. Please provide a valid mail" });
    }catch(error){
        return response.status(500).json({message:"Server Error"})
    }
  }
  return response.status(400).json({ message: "No email sent" });
};

const resetPassword = (request,response)=>{
    email = request.query.email;
    token = request.query.token;
    console.log('hello gandu',token)
    // console.log()
    if(email && token){
        console.log("hello boys")
        jwt.verify(token,'forgetPassword',(error,success)=>{
            if(success){
                return response.status(200).json({message:"nice one"})
            }
            
            console.log('error',error);
            return response.status(404).json({message:"Invalid Link"})
        })
    }
    return response.status(400).json({message:"Invalid Link"})
}

const passwordChanged = async(request,response) =>{
    try{

        const email = request.body.email;
        const password = request.body.password;
        const token = request.body.token;
        console.log(email,"  ",password,"  ",token)
        if(email && password && token){
            if(String(password).length<8){
                return response.status(404).json({message:"Error in changing password"})
            }
            try{

                bcrypt.hash(password, 10, async function(err, hash) {
                    if(hash){
                        
                        await UserSchema.findOneAndUpdate({email:email},{password:hash},{new:true})
                        return response.status(200).json({message:"Successfully updated"})
                    }else{
                        return response.status(500).json({messagae:"Unable to hash the password"})
                    }
                });
            }catch(error){
                return response.status(500).json({message:"Server error"});
            }
        }
    }
    catch(error){
        return response.status(404).json("Sorry unable to change")
    }
    
}
module.exports = {forgetPassword,resetPassword,passwordChanged};
