const Product = require("../models/Product");

const getProducts = (req, res) => {
  return Product.find();
};

const createProduct = (req, res) => {
  const { name, description, image, tags, options, price } = req.body; // EDIT
  const newProduct = { name, description, image, tags, options, price }; // EDIT
  return new Product(newProduct);
};

const getProduct = (req, res) => {
  return Product.findById(req.params.id)
};

const deleteProduct = (req, res) => {
  return Product.findByIdAndDelete(req.params.id)
};

const updateProduct = (req, res) => {
  const { name, description, image, tags, options, price } = req.body; // EDIT
  const updatedProduct = { name, description, image, tags, options, price }; // EDIT
  return Product.findByIdAndUpdate(req.params.id, updatedProduct, {
    new: true,
  })
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
