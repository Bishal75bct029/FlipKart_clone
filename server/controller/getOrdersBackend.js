const mongoose = require("mongoose");
const { OrderSchema } = require("../model/order");

const getBackendOrders = async (request, response) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    const orderItems = await OrderSchema.aggregate([
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
          $and: [
            {
              $or: [
                {
                  ...(request.user.role === "admin"
                  ?{}
                  :{"product.createdBy": new mongoose.Types.ObjectId(request.user._id)}
                  )
                },
                { "user._id": new mongoose.Types.ObjectId(request.user._id) },
              ],
            },
            { createdAt: { $gte: today } }, // Filter orders created today or later
            request.query.orderType === "all"
              ? {}
              : { status: request.query.orderType },
          ],
        },
      },
    ]);

    let totalPendingCost = 0;
    let totalProcessingCost = 0;
    let totalSoldCost = 0;
    let totalTodayCost = 0;

    orderItems.forEach((order) => {

      if (order.status === "pending") {
        totalPendingCost += order.product[0].price.cost;
      } else if (order.status === "processing") {
        totalProcessingCost += order.product[0].price.cost;
      } else if (order.status === "complete") {
        totalSoldCost += order.product[0].price.cost;
      }
      totalTodayCost = totalPendingCost + totalProcessingCost + totalSoldCost;
    });

    const topFive = await OrderSchema.aggregate([
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
          $and: [
            {
              $or: [
                {
                  ...(request.user.role === "admin"
                  ?{}
                  :{"product.createdBy": new mongoose.Types.ObjectId(request.user._id)}
                  )
                },
                { "user._id": new mongoose.Types.ObjectId(request.user._id) },
              ],
            },

            request.query.orderType === "all"
              ? {}
              : { status: request.query.orderType },
          ],
        },
      },

      {
        $group: {
          _id: {
            productID: "$productID",
            productCategory: { $arrayElemAt: ["$product.category", 0] },
          },
          totalQuantity: { $sum: "$quantity" },
          totalPrice: {
            $sum: {
              $multiply: [
                "$quantity",
                { $arrayElemAt: ["$product.price.cost", 0] },
              ],
            },
          },
        },
      },
      {
        $group: {
          _id: "$_id.productCategory",
          // totalQuantity:'$totalQuantity',
          totalPrice: { $sum: "$totalPrice" },
        },
      },
      {
        $sort: {
          totalPrice: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);

    const orderMonths = await OrderSchema.aggregate([
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
          $and: [
            {
              $or: [
                {
                  "product.createdBy": new mongoose.Types.ObjectId(
                    request.user._id
                  ),
                },
                { "user._id": new mongoose.Types.ObjectId(request.user._id) },
              ],
            },
            { createdAt: { $gte: today } }, // Filter orders created today or later
            request.query.orderType === "all"
              ? {}
              : { status: request.query.orderType },
          ],
        },
      },
    ]);
    let totalMonthSales = 0;
    orderMonths.forEach((order)=>{
        if(order.status === 'complete'){
            totalMonthSales = totalMonthSales + order.product[0].price.cost;
        }
    })

    const orderTotals = {
      totalPendingCost,
      totalProcessingCost,
      totalSoldCost,
      totalTodayCost,
      topFive,
      totalMonthSales
    };

    return response.status(200).json({ orderTotals });
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getBackendOrders };
