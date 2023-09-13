const jwt = require("jsonwebtoken");

const isAuth = (request, response, next) => {
  let token = request.headers.authorization;
  if(!token){
    response.status(401).json({message:"Expired Token"})
  }
  token = token.split(" ");
  token = token[1];
  console.log(token, "haha");
  jwt.verify(token, "flipkartClone", (error, decodedToken) => {
    if (error) {
      console.log("Token error", error);
      response.status(404).json({"message":"invalid token"})
    }
    request.user = {_id:decodedToken._id}
    console.log("Decoded Token:", decodedToken);
    next();
  });
};
module.exports = isAuth;
