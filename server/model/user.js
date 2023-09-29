const mongoose = require("mongoose");
const { OrderSchema } = require("./order");
const ProductSchema = require("./product");

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

userSchema.pre("findOneAndDelete", async function (next) {
  try {
    // Find all products posted by this user
    console.log("hello boy");

    const products = await ProductSchema.find({ createdBy: this._id });
    console.log(this._id,'gandulaal ')
    console.log(products,'gorulaaal')

    
    for (const product of products) {
      console.log(product._id,'haha')
      const orders = OrderSchema.find({productID:product._id})
      for (const order of orders){
        console.log(orders,'oooo')
        await order.remove();
      }
      await product.remove();
    }

    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
});

const UserSchema = mongoose.model('user',userSchema)
module.exports = UserSchema