const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },

  price: {
    type: Number,
    required: true,
    min: [0, "Price must be 0 or more."]
  },

  image: {
    type: String,
    default: "blank product image"
  },

  description: {
    type: String,
    required: true,
  },

  tags: [{name: String, color: String}],

  options: [{name: String, price: String}]



})

module.exports = mongoose.model("Product", Product)