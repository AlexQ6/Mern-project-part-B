const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Order = require("../models/Order");

// * CHAI CONFIG
chai.use(chaiHttp);
chai.should();

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


// Create test Order document

const setupData = () => {
    const name = "Bob"
    const mobile = "0400 000 000";
    const email = "bob@gmail.com";
    const items = [{item: "sausage roll", price: 3, quantity: 2, options: ["extra sauce"] }];
    const totalPrice = 6
    const newOrder = {name, mobile, email, items, totalPrice}
    return Order.create(newOrder)
};

// Before each test create a new Order document
beforeEach(async function(){
    const order = await setupData();
    orderId = order._id

})

// Delete Order document
function tearDownData() {
	return Post.deleteMany()
}


// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

// Close the connection to the db once all the tests have been run
after((done) => {
    mongoose.disconnect(() => done());
});

describe("order CURD operations", function () {
    describe("get all orders at /orders", function (){
        it("should return with status 200", function () {
            chai
                .request(app)
                .get("/orders")
                .end((err, res) => {
                    res.should.have.status(200);
                });
        })

        it("should return an array", function () {
            chai
                .request(app)
                .get("/orders")
                .end((err, res) => {
                    res.should.be.a("array");
                });
        });
    });

    describe("get one order at orders/:id", function () {
        it("should return one order with orderId", function () {
            chai
                .request(app)
                .get(`orders/${OrderId}`)
                .end((err, res) => {
                    const name = res.body.name
                    name.should.equal("Bob")
                })
        })
    })
});

