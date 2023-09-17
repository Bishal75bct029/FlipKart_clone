const UserSchema = require("../model/user");
const jwt = require('jsonwebtoken')

const secretKey = "flipkartClone"

const login = async (request, response) => {

  // console.log(request.body)

  try {
    console.log("data xaina ra");
    console.log(request.body)
    if (request.body.email && request.body.password) {
      console.log("k ma yeha xu")
      const loginCredentials = request.body;
      console.log(request.body, "iam request.body ");
      let result = await UserSchema.findOne(loginCredentials);
      console.log(result, "iamresult");

      if (result) {
        result = result.toObject();
        let payload = {_id:result._id,email:result.email, password:result.password};
        let token = jwt.sign(payload,secretKey,{expiresIn:'1h'})
        const responseData = JSON.stringify({
          message: "Succesfully Logged in",
          username: result.username,
          email:result.email,
          _id:result._id,
          token: token
        });
       return response.status(200).json(responseData);
      }
    }

    return response.status(404).json({ message: "Invalid Credentials" });
  } catch (error) {
    console.log("ma yeha aako ho ra")
    return response.status(500).json({ message: error.message });
  }
};

module.exports = login;
