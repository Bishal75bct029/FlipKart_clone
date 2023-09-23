const {CartSchema} = require('../model/cart');

const AddToCart = async (request,response)=>{
    if (!request.params.id) {
        console.log("hello");
        return response
          .status(404)
          .json({ message: "Please Select the product to order" });
      }
      try {
        const data = request.body;
        console.log("iamdata",data)
        console.log(request.params.id)
        const orderData = {
          productID: request.params.id,
          createdBy: request.user._id,
          
          
        };
    
        await CartSchema.create(orderData)
          
        return response
          .status(200)
          .json({ message: "Successfully added product to the cart" });
      } catch (error) {
        console.log(error, "here i am");
        return response.status(500).json({ message: "Server Error" });
      }
}

module.exports = {AddToCart}