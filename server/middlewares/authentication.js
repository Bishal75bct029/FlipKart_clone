const jwt = require("jsonwebtoken");

const isAuth = (request, response, next) => {
  try{
    console.log(request.headers,"request header")
    let token = request.headers.authorization;
    if(!token){
      response.status(401).json({message:" Please Provide Token"})
    }
    token = token.split(" ");
    token = token[1];
    console.log(token, "haha");
    jwt.verify(token, "flipkartClone", (error, decodedToken) => {
    if (error) {
      console.log("Token error", error);
      return response.status(404).json({"message":"invalid token"})
    }
    request.user = {_id:decodedToken._id,role:decodedToken.role,username:decodedToken.username}
    
    console.log("Decoded Token:", decodedToken);
    next();
  });
}catch(error){
  console.log(error,'k xa error cart')
}
};
module.exports = isAuth;
