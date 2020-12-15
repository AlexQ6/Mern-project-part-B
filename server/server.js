// NODE PACKAGES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

// LOCAL FILES
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');

// CONSTANT VARIABLES
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cafe_app";

//APP
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTERS
app.get("/", (req, res) => {
  console.log("get on /");
  res.send("got your request");
});

app.use("/orders", orderRouter)
app.use("/products", productRouter)


// MONGOOSE
mongoose.connect(
  MONGODB_URI,
  { useUnifiedTopology: true, useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) { console.log(err) }
    console.log("DB Connected!")
  }
);

// LISTEN THING
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app