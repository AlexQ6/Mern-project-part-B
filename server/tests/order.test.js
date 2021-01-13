const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Order = require("../models/Order");

// * CHAI CONFIG
chai.use(chaiHttp);
const should = require("chai").should();


// Create test Order document

// const setupData = () => {
//     const name = "Bob"
//     const mobile = "0400 000 000";
//     const email = "bob@gmail.com";
//     const items = [{item: "sausage roll", price: 3, quantity: 2, options: ["extra sauce"] }];
//     const totalPrice = 6
//     const newOrder = {name, mobile, email, items, totalPrice}
//     return Order.create(newOrder)
// };

// // Before each test create a new Order document
// // beforeEach(async function(){
// //     const order = await setupData();
// //     const orderId = order._id
// //     return orderId
    

// // })

// // Delete Order document
// function tearDownData() {
// 	return Order.deleteMany()
// }


// // Delete test data after each test
// afterEach((done) => {
//     // Execute the deleteMany query
//     tearDownData().exec(() => done());
// });


describe("order CURD operations", function () {
    
    beforeEach((done) => {
        Order.deleteMany({}, (err) => {
           done();
        });
    });

    describe("get all orders at /orders", function (){
        const name = "Bob"
        const mobile = "0400 000 000";
        const email = "bob@gmail.com";
        const items = [{item: "sausage roll", price: 3, quantity: 2, options: ["extra sauce"] }];
        const totalPrice = 6
        const newOrder = {name, mobile, email, items, totalPrice}


        it("should return with status 200", function () {
            chai
                .request(app)
                .get("/orders")
                .end((err, res) => {
                    res.should.have.status(200);
                });
        })

        it("should return an object", function () {
            chai
                .request(app)
                .get("/orders")
                .end((err, res) => {
                    should.exist(res.body);
                    res.body.newOrder.should.be.a("object");
                });
        });
    });

    describe("get one order at orders/:id", function () {
        
        it("should return one order with orderId", function () {
            const name = "Bob"
            const mobile = "0400 000 000";
            const email = "bob@gmail.com";
            const items = [{item: "sausage roll", price: 3, quantity: 2, options: ["extra sauce"] }];
            const totalPrice = 6
            const newOrder = {name, mobile, email, items, totalPrice}
            new Order(newOrder)

            newOrder.save((err, newOrder) => {
                chai
                .request(app)
                .get(`/orders/${order._id}`)
                .send(newOrder)
                .end((err, res) => {
                    res.body.should.have.property('name');
                    
                })

            })
            
        })
    })
});

