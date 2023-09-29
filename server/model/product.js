const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique:true,
    
  },
  image:{
    type:String,
    required:true,
  },
  title: {
    shortTitle: {
      type: String,
      required: true,
    },
    longTitle: {
      type: String,
      required: true,
    },
  },
  price: {
    mrp: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    discount: {
      type: String,
      default:"",
    },
  },
  quantity: Number,
  description: String,
  discount: {
    type: String,
    default:""
  },
  tagline: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    enum:['mobile','clothing','appliances','travel','beauty','gifts','fashion','electronics','grocery','home'],
    required:true,


  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    default:'74fd68f942f0b356f53f157d',
  },
  
});

productSchema.pre("remove", async function (next) {
  try {
    // Remove all orders that have this product's ID as their productID
    console.log("janam")
    await OrderSchema.deleteMany({ productID: this._id });
    next();
  } catch (error) {
    next(error);
  }
});

const ProductSchema = mongoose.model('product',productSchema)
 module.exports =  ProductSchema