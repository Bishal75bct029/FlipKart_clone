const UserSchema = require("../model/user");

const login = async(request,response)=>{
    const loginCredentials = request.body;
    console.log(request.body)
    let result = await UserSchema.findOne(loginCredentials)
    if(result){
        // console.log('gandu')
        result = result.toObject()
        const responseData = JSON.stringify({message:"Succesfully Logged in",data:result.username})
        response.status(200).json(responseData)

    }else{
        console.log('failed')
    }
}

module.exports = login