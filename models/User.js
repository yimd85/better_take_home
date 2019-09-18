const mongoose = require("mongoose");
const { Schema } = mongoose;

const Users = new Schema({
  id: Number,
  username: String,
  real_name: String,
  verified: Boolean,
  image: String
});

mongoose.model("users", Users);
