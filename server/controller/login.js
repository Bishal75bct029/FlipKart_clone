const UserSchema = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // Import bcrypt

const secretKey = "flipkartClone";

const login = async (request, response) => {
  try {
    console.log("data xaina ra");
    console.log(request.body);
    if (request.body.email && request.body.password) {
      console.log("k ma yeha xu");
      const loginCredentials = request.body;
      console.log(request.body, "iam request.body ");
      let result = await UserSchema.findOne({ email: request.body.email });
      if (result) {
        bcrypt.compare(
          request.body.password,
          result.password,
          function (err, hash) {
            if (err) {
              return response.status(500).json({ message: err });
            } else if (hash) {
              console.log(hash, "iamresult");
              if (result.status === "verified") {
                result = result.toObject();
                let payload = {
                  _id: result._id,
                  username: result.username,
                  email: result.email,
                  role: result.role,
                };
                let token = jwt.sign(payload, secretKey, { expiresIn: "5h" });
                const responseData = JSON.stringify({
                  message: "Successfully Logged in",
                  username: result.username,
                  email: result.email,
                  _id: result._id,
                  token: token,
                  role: result.role,
                });
                return response.status(200).json(responseData);
              }
              return response
                .status(400)
                .json({ message: "Please verify your id through mail" });
            }
          }
        );
      } else {
        return response.status(404).json({ message: "Invalid Credentials" });
      }
    }
  } catch (error) {
    console.log("ma yeha aako ho ra");
    return response.status(500).json({ message: error.message });
  }
};

module.exports = login;
