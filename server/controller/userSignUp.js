const UserSchema = require("../model/user");
const Joi = require("joi");
const jwt = require('jsonwebtoken');
const sendMail = require("../functions/sendMail");
const bcrypt = require('bcrypt');

const createUser = async (request, response) => {
  if(!request.query.email && !request.query.token && Object.keys(request.body).length > 0)
  {

    console.log(" are you here")
    const user = {email:request.body.email,username:request.body.email}
  console.log('user',user)
  const signUpSchema = Joi.object({
    username: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
   
  });
  const { error, value } = signUpSchema.validate(user);
  console.log("I am value",value)
  console.log("hey")

  if (error) {
    console.error("Validation error:", error.details);
    return response.status(400).json({message:"error"});
  } else {
    console.log("Valid user data:", value);
  }
  const userExist = await UserSchema.findOne({
    $or: [{ username: request.body.username }, { email: request.body.email }],
  });
  if (userExist) {
    if(userExist.status === 'unverified'){
      return response.status(400).send('You are already registered. Please verify your mail.')
    }
    return response.status(400).send("Username or email already exist");
    
  }
  let signUpData;
  console.log(request.body.seller)
  if(request.body.seller){
    signUpData = {...request.body,role:'seller'}
    console.log(signUpData,'signUpdata')
    
  }else{
    signUpData = {...request.body, role:'buyer'}
  }

  bcrypt.hash(request.body.password,10,async(error,hash)=>{
    if(hash){
      signUpData = {...signUpData, password:hash}
      console.log(signUpData,'lalalala')
      try{

        const saveUser = await new UserSchema(signUpData);
        const done = await saveUser.save();
      }catch(error){
        console.log("Something went wrong");
        console.log("done", "haha");
        if (done) {
          console.log("User sign up successfully");
        } 
      }
    }else{
      return response.status(500).json({message:"Server error",error});
    }
  })
  
  console.log("Sign Up data",signUpData);
  let token = jwt.sign({ email: signUpData.email }, "signup", {
    expiresIn: "10y",
});
let verifyLink = `http://localhost:5173/signup?token=${token}&email=${signUpData.email}`;
sendMail(verifyLink,"Verify your mail",signUpData.email)
return response.status(200).send("Email has been sent successfully. Verify your mail");


}else{
  console.log(request.query.token,'xa ra',request.query.email,'email pani')
  if(request.query.token && request.query.email){
    console.log("Hi")
    jwt.verify(request.query.token, 'signup',async(error,decoded_Token)=>{
      if(error){
        return response.send(400).send("Invalid token")
      }
      const signUp = await UserSchema.findOneAndUpdate({email:request.query.email},{status:'verified'},);
     
    })
  }
}
};

const getUsers = async(request,response)=>{
  try{
    const users = await UserSchema.find();
    console.log(users,'users')
    return response.status(200).json({message:users});
  }catch(error){
    console.log("Failed to retrieve users")
  }

}

const deleteUsers = async(request,response)=>{
  try{
    if(request.user.role === 'admin'){

      const deleteUser = await UserSchema.findByIdAndDelete(request.params.id);
      // const userToDelete = await UserSchema.findById(request.params.id)
      console.log(userToDelete,'love me')
      // console.log(userToDelete.remove(),'k xa ra ho yesma');
      // await UserSchema.remove({_id:request.params.id});
      return response.status(200).json({message:"success"});
    }
    return response.status(403).json({message:"not allowed"})
    }catch(error){
      return response.status(500).json({message:"fail to delete user",error:error});
    }
}

module.exports = {createUser,getUsers,deleteUsers};
