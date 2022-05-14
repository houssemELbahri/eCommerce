const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  total: Number,
});

exports.Order = mongoose.model("Order", orderSchema);
