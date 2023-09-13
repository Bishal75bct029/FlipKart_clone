const UserSchema = require("../model/user");
const jwt = require('jsonwebtoken')

const secretKey = "flipkartClone"

const login = async (request, response) => {

  try {
    if (request.body.email && request.body.password) {
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
          data: result.username,
          token: token
        });
       return response.status(200).json(responseData);
      }
    }

    return response.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

module.exports = login;
