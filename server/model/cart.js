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
    
     

      
})

const CartSchema = mongoose.model('cart',cartSchema);
module.exports ={CartSchema}