const Product = require("../models/Product");

const getProducts = (req, res) => {
  return Product.find();
};

const createProduct = (req, res) => {
  return new Product(req.body);
};

const getProduct = (req, res) => {
  return Product.findById(req.params.id)
};

const deleteProduct = (req, res) => {
  return Product.findByIdAndDelete(req.params.id)
};

const updateProduct = (req, res) => {
  return Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
