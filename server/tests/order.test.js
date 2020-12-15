const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Order = require("../models/Order");

// * TEST SETUP
const testMongoUri = "mongodb://localhost/cafe_app_test";

// Connect to database before the first test
before((done) => connectToDb(done));

// Function to connect to mongoDb
const connectToDb = (done) => {
  mongoose.connect(
    testMongoUri,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) {
        console.log(err);
        done();
      } else {
        console.log("Connected to DB");
        done();
      }
    }
  );
};