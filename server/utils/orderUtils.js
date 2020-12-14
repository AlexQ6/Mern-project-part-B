const Order = require('../models/Order')

const getOrders = (req, res) => {
  Order.find().then(response => res.send(response))
}

const createOrder = (req, res) => {
  const { name, price, description, options, tags } = req.body; // EDIT
  const newOrder = {name, price, description, options, tags} // EDIT
Order.create(newOrder).then(response => res.send(response))
}

const getOrder = (req, res) => {
  Order.findById(req.params.id).then(response => res.send(response))
}

const deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id).then(response => res.send('Order Removed'))
}

const updateOrder = (req, res) => {
  const { name, price, description, options, tags } = req.body; // EDIT
  const updatedOrder = {name, price, description, options, tags} // EDIT
  Order.findByIdAndUpdate(req.params.id, updatedOrder, { new: true }).then(response => res.send(response))
}

module.exports = {
  getOrders,
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
}