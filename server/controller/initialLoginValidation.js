const jwt = require('jsonwebtoken');
const UserSchema = require('../model/user');

const validateLogin = async(request,response) =>{
    if(request.headers.authorization){
        console.log("Hi");
        let token = request.headers.authorization;
        token = token.split(" ");
        token = token[1];
        jwt.verify(token, "flipkartClone", async(error, decodedToken) => {
        if (error) {
        console.log("Token error", error);
        return response.status(404).json({"message":"invalid token"})
    }
        
    const userInfo = await UserSchema.findOne({_id:decodedToken._id})
    if(userInfo){
        return response.status(200).json({message:"Success",token:{...decodedToken,token:token}})
    }else{
        return response.status(400).json({message:[]});
    }
});

    }else{
        return response.status(400).json({message:'haha'})
    }
}

module.exports = {validateLogin}