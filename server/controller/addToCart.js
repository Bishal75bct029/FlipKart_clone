const { CartSchema } = require("../model/cart");

const AddToCart = async (request, response) => {
  if (!request.params.id) {
    console.log("hello");
    return response
      .status(404)
      .json({ message: "Please Select the product to order" });
  }
  console.log("love you jaanu")
  try {
    const data = request.body;
    console.log("iamdata", data);
    console.log(request.params.id);
    const cartData = {
      productID: request.params.id,
      createdBy: request.user._id,
      
    };
    console.log(cartData,'laulau')
    let existingCartItem = await CartSchema.findOne(cartData);
    console.log(existingCartItem,'hi',cartData);

    if (existingCartItem) {
      
      existingCartItem ={quantity:existingCartItem.quantity + request.body.quantity}
      console.log(existingCartItem,'yo value rakhna parne');
      const updateCart = await CartSchema.findOneAndUpdate(cartData,existingCartItem)
      
      console.log("Update vako ho ra")
      return response.status(200).json({ message: "Item updated in the cart" });
    }else{

      
      await CartSchema.create({...cartData,quantity:request.body.quantity});
      
      return response
      .status(200)
      .json({ message: "Successfully added product to the cart" });
    } 
  } catch (error) {
    console.log(error, "here i am");
    return response.status(500).json({ message: "Server Error" });
  }
};

const getCartData = async (request, response) => {
  if (request.user.role === "buyer") {
    try {
      const cartItems = await CartSchema.find({ createdBy: request.user._id })
      .populate({path:"productID",select:"_id title price image discount tagline quantity,image"})
      .exec();
      return response.status(200).json({message:"Fetched successfully",cartItems})
    } catch (error) {
      return response.status(500).json({ message: "server error", error });
    }
  } else {
    return response
      .status(403)
      .json({ message: "Only buyers are allowed to add at cart" });
  }
};

const deleteCart = async(request,response)=>{
  if(request.params.id){
    try{
      await CartSchema.findOneAndDelete({_id:request.params.id})
      return response.status(200).json({message:'Deleted cart successfully'});
    }catch(error){
      return response.status(500).json({message:error})
    }
  }
  return response.status(400).json({message:"No cart selected"});
}

module.exports = { AddToCart, getCartData,deleteCart };
