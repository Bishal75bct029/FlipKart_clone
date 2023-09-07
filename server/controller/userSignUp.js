const UserSchema = require("../model/user");
const Joi = require("joi");

const createUser = async (request, response) => {
  const user = request.body;
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
    response.status(400).send("Username or email already exist");
    console.log("Already there bb", userExist);
    return;
  }
  const saveUser = new UserSchema(request.body);
  console.log("haha");
  const done = await saveUser.save();
  console.log("done", "haha");
  if (done) {
    console.log("User sign up successfully");
    response.status(200).send("Successfully sign up");
  } else {
    response.status(500).send("Server Error");
  }

  console.log(request.body);
};

module.exports = createUser;
