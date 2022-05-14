const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

exports.User = mongoose.model("User", userSchema);
