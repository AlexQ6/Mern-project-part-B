const Order = require('../models/Order')

const getOrders = (req, res) => {
  return Order.find()
}

const createOrder = (req, res) => {
  console.log(req.body);
  return new Order(req.body);
}

const getOrder = (req, res) => {
  return Order.findById(req.params.id)
}

const deleteOrder = (req, res) => {
  return Order.findByIdAndDelete(req.params.id)
}

const updateOrder = (req, res) => {
  // const { name } = req.body; // EDIT
  // const updatedOrder = {name} // EDIT
  return Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
}

module.exports = {
  getOrders,
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
}