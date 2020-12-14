const Order = require('../models/Order')

const getOrders = (req, res) => {
  return Order.find()
}

const createOrder = (req, res) => {
  const { name } = req.body; // EDIT
  const newOrder = {name} // EDIT
  return new Order(newOrder);
}

const getOrder = (req, res) => {
  return Order.findById(req.params.id)
}

const deleteOrder = (req, res) => {
  return Order.findByIdAndDelete(req.params.id)
}

const updateOrder = (req, res) => {
  const { name } = req.body; // EDIT
  const updatedOrder = {name} // EDIT
  return Order.findByIdAndUpdate(req.params.id, updatedOrder, { new: true })
}

module.exports = {
  getOrders,
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
}