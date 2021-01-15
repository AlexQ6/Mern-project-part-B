const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/((?:.+\.)+|(?:.+)+).+@(?:[\w\d]+\.)+(?:\w+)/, 'Please fill a valid email address']
  },

  password: {
    type: String,
    required: true,
    minlength: [ 8, "Choose a password with 8 or more characters" ]
  },
});

// Mongoose-Bcrypt will hash the user's password
User.plugin(require("mongoose-bcrypt"));
module.exports = mongoose.model("User", User);
