const mongoose = require("mongoose");
const { Schema } = mongoose;

const Posts = new Schema({
  id: Number,
  user: Number,
  message: String,
  ts: Number
});

mongoose.model("posts", Posts);
