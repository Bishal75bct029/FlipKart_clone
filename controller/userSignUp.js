const UserSchema = require("../model/user");
const Joi = require("joi");
const jwt = require('jsonwebtoken');
const sendMail = require("../functions/sendMail");

const createUser = async (request, response) => {
  if(!request.query.email && !request.query.token && Object.keys(request.body).length > 0)
  {

    console.log(" are you here")
    const user = request.body;
  console.log('user',user)
  const signUpSchema = Joi.object({
    username: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .min(8),
      phone: Joi.string().max(3),
  });
  const { error, value } = signUpSchema.validate(user);
  console.log("I am value",value)
  console.log("hey")

  if (error) {
    console.error("Validation error:", error.details);
  } else {
    console.log("Valid user data:", value);
  }
  const userExist = await UserSchema.findOne({
    $or: [{ username: request.body.username }, { email: request.body.email }],
  });
  // userExist = userExist.toObject()
  if (userExist) {
    if(userExist.status === 'unverified'){
      return response.status(200).send('You are already registered. Please verify your mail.')
    }
    response.status(400).send("Username or email already exist");
    console.log("Already there bb", userExist);
    return;
  }
  let signUpData;
  console.log(request.body.seller)
  if(request.body.seller){
    signUpData = {...request.body,role:'seller'}
    console.log(signUpData,'signUpdata')
    
  }else{
    signUpData = {...request.body, role:'buyer'}
  }
  console.log("Sign Up data",signUpData);
  const saveUser = new UserSchema(signUpData);
  let token = jwt.sign({ email: signUpData.email }, "signup", {
    expiresIn: "10y",
});
let verifyLink = `http://localhost:5173/signup?token=${token}&email=${signUpData.email}`;
sendMail(verifyLink,"Verify your mail",signUpData.email)


  console.log("haha");
  const done = await saveUser.save();
  console.log("done", "haha");
  if (done) {
    console.log("User sign up successfully");
    response.status(200).send("Email has been sent successfully. Verify your mail");
  } else {
    response.status(500).send("Server Error");
  }
  
  console.log(request.body,"gandulaal");
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
    if(request.user.role === 'seller' || request.user.role === 'buyer'){

      console.log("I love you")
      const deleteUser = await UserSchema.findByIdAndRemove(request.params.id);
      return response.status(200).json({message:"success"});
    }
    return response.status(403).json({message:"not allowed"})
    }catch(error){
      return response.status(400).json({message:"fail to delete user"});
    }
}

module.exports = {createUser,getUsers,deleteUsers};
