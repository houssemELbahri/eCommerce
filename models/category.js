const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
});

exports.Category = mongoose.model("Category", categorySchema);
