const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name: {
        type: String,
        required: true,
      },

})

module.exports = mongoose.model("Order", Order)