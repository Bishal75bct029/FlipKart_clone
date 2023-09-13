const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique:true,
    
  },
  url: String,
  detailUrl: String,
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
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    default:'74fd68f942f0b356f53f157d',
  },
  
});

const ProductSchema = mongoose.model('product',productSchema)
 module.exports =  ProductSchema