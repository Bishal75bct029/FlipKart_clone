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
      required: true,
    },
  },
  quantity: Number,
  description: String,
  discount: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
});

const ProductSchema = mongoose.model('product',productSchema)
 module.exports =  ProductSchema