const Order = require("../models/Order");

const getOrders = (req, res) => {
  return Order.find();
};

const createOrder = (req, res) => {
  return new Order(req.body);
};

const getOrder = (req, res) => {
  return Order.findById(req.params.id);
};

const deleteOrder = (req, res) => {
  return Order.findByIdAndDelete(req.params.id);
};

const updateOrder = (req, res) => {
  return Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
}

module.exports = {
  getOrders,
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
};
