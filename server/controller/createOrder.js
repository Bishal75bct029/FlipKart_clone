const { OrderSchema } = require("../model/order");
const { CartSchema } = require("../model/cart");
const { UserSchema } = require("../model/user");
const ProductSchema = require("../model/product");
const { mongoose } = require("mongoose");
const createOrder = async (request, response) => {
  try {
    const data = request.body;
    const shippingAddress = data.shippingAddress;
    const paymentStatus = data.paymentStatus;

    const fetchCart = await CartSchema.find({ createdBy: request.user._id });
    let insertingData;

    if (Array.isArray(fetchCart) && fetchCart.length > 0) {
      const insertingData = fetchCart.map((cart_item, index) => {
        cart_item = cart_item.toObject();
        delete cart_item._id;
        return { ...cart_item, shippingAddress, paymentStatus };
      });
      await OrderSchema.create(insertingData);

      await CartSchema.deleteMany({ createdBy: request.user._id });

      return response
        .status(200)
        .json({ message: "Successfully Ordered product" });
    }
    return response.status(200).json({ message: "No items in the cart" });
  } catch (error) {
    return response.status(500).json({ message: "Server Error" });
  }
};
let orderItems;
let result;

const getOrders = async (request, response) => {
  try {
    if (request.user.role === "buyer") {
      orderItems = await OrderSchema.find({ createdBy: request.user._id,status: {$in:['pending','processing']} })
        .populate({
          path: "productID",
          select:
            "_id title price image discount tagline quantity,image,createdBy",
          populate: {
            path: "createdBy",
            select: "username",
            model: UserSchema,
          },
        })
        .exec();
    } else if (request.user.role === "seller" || request.user.role === "admin") {

      orderItems = await OrderSchema.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "productID",
            foreignField: "_id",
            as: "product",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "createdBy",
            foreignField: "_id",
            as: "user",
          },
        },

        {
          $match: {
           ...(request.user.role === "admin"
           ?{}
           :{"product.createdBy": new mongoose.Types.ObjectId(request.user._id)}
           )
              
            ,
            ...(request.query.orderType === "all"
              ? {}
              : { status: request.query.orderType }),
          },
        },
      ]);
    }
    if (Array.isArray(orderItems)) {
      const filteredOrders = orderItems.filter((order) => order.productID);
      // console.log(filteredOrders, filteredOrders.length);
      return response
        .status(200)
        .json({ message: "Successfully fetched your orders", orderItems });
    }
    return response.status(400).json({ message: "failed" });
  } catch (error) {
    console.log("error", error);
    return response.status(500).json({ message: error });
  }
};

const changeOrderStatus = async (request, response) => {
  try {
    console.log("sandeep");

    const status = request.body.status;
    console.log(status);
    const id = request.params.id;
    const order = await OrderSchema.findOneAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
    if (order) {
      return response.status(200).json({ message: "hello" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: error });
  }
};

const deleteOrder = async(request,response)=>{
  try{
    const id = request.params.id;
    const deleted = await OrderSchema.findOneAndDelete({_id:id});
    if(!deleted){
      console.log(deleted);
      return response.status(400).json({message:"Deleted Successfully"});
    }
    console.log("kale")
    return response.status(200).json({message:"Deleted Successfully"});
  }catch(error){
    return response.status(200).json({message: error});
  }
}

module.exports = { createOrder, getOrders, changeOrderStatus,deleteOrder };
