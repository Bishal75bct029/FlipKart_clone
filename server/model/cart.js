const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    
      quantity: {
        type: Number,
        default:1,
      },

      
})

const CartSchema = mongoose.model('cart',cartSchema);
module.exports ={CartSchema}