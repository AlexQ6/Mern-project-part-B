const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../utils/productUtil");

const getAllProducts = (req, res) => {
  getProducts(req).exec((err, products) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message,
      });
    }
    res.send(products);
  });
};

const createOneProduct = (req, res) => {
  createProduct(req).save((err, product) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message,
      });
    }
    res.send(product);
  });
};

const getSingleProduct = (req, res) => {
  getProduct(req).exec((err, product) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message,
      });
    }
    res.send(product);
  });
};

const deleteOneProduct = (req, res) => {
  deleteProduct(req).exec((err) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message,
      });
    }
    res.send("Item Removed");
  });
};

const updateOneProduct = (req, res) => {
  updateProduct(req).exec((err, product) => {
    if (err) {
      res.status(500);
      return res.json({
        error: err.message,
      });
    }
    res.send(product);
  });
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getSingleProduct,
  deleteOneProduct,
  updateOneProduct,
};
