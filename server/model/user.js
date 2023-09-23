const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role:{
    type:String,
    enum:['seller',"buyer"],
    default:'buyer'
  },
  status:{
    type:String,
    enum:['verified','unverified'],
    default:'unverified'
  }
});

const UserSchema = mongoose.model('user',userSchema)
module.exports = UserSchema