const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name: {
        type: String,
        required: true,
      },

    mobile: {
      type: String,
      // required: true,
      validator: function(v) {
        arr = v.trim().split("")
        return (arr[0] == "0" && arr[1] == "4" && arr.length == 10)
      },
      message: "Please enter a valid mobile number"
    },

    email: {
      type: String,
      required: true,
      match: [/((?:.+\.)+|(?:.+)+).+@(?:[\w\d]+\.)+(?:\w+)/, 'Please fill a valid email address']
      // /(.+)@(.+\.){1,}(\w+)/
    },

    note: {
      type: String,
    },

    isReady: {
      type: Boolean,
      default: false
    },

    items: [{item: String, price: Number, quantity: Number, options: [String] }],

    totalPrice: {
      type: Number,
      required: true,
      min: [0, "Total price must be 0 or more."]
    },

    timeOrdered: {
      type: Date,
      required: true,
      default: Date.now()
    }
})

module.exports = mongoose.model("Order", Order)