const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String },
  image: { type: String, required: true },
  size: { type: Array },
  gender: { type: String },
  description: { type: String, required: true },
});
module.exports = mongoose.model("Products", productSchema);
