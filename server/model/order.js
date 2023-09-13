const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

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
    default: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  shippingAddress: {
    type: String,
    required: true,
  },

  paymentStatus: {
    type: String,
    enum: ["paid", "notPaid"],
    default: "notPaid",
  },

  status: {
    type: String,
    enum: ["complete", "pending", "cancelled"],
    default: "pending",
  },
});

const OrderSchema = mongoose.model('order',orderSchema);
module.exports ={OrderSchema}
