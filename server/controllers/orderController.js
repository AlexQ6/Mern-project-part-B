const {
    getOrders,
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder,
  } = require("../utils/orderUtil")

  const getAllOrders = (req, res) => {
    getOrders(req).exec((err, orders) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message,
        });
      }
      res.send(orders);
    });
  };
  
  const createOneOrder = (req, res) => {
      console.log("create one order controller");
    createOrder(req).save((err, order) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message,
        });
      }
      res.send(order);
    });
  };
  
  const getSingleOrder = (req, res) => {
    getOrder(req).exec((err, order) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message,
        });
      }
      res.send(order);
    });
  };
  
  const deleteOneOrder = (req, res) => {
    deleteOrder(req).exec((err) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message,
        });
      }
      res.send("Item Removed");
    });
  };
  
  const updateOneOrder = (req, res) => {
    updateOrder(req).exec((err, order) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message,
        });
      }
      res.send(order);
    });
  };

  module.exports = {
    getAllOrders,
    createOneOrder,
    getSingleOrder,
    deleteOneOrder,
    updateOneOrder,
  };
  