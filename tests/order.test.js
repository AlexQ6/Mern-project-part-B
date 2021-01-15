const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Order = require("../models/Order");


// * CHAI CONFIG
chai.use(chaiHttp);
const should = require("chai").should();

// let orderId = null;


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
    // orderId = order._id
    
})

// Delete Order document
function tearDownData() {
	return Order.deleteMany()
}


// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
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

        it("should return an object", function () {
            chai
                .request(app)
                .get("/orders")
                .end((err, res) => {
                    should.exist(res.body);
                    
                    res.body.should.be.a("array");
                    
                });
        });
    });

    // describe("get one order at orders/:id", function () {
        
    //     it("should return one order with orderId", function () {
            
    //         chai
    //             .request(app)
    //             .get(`/orders/${orderId}`)
    //             .end((err, res) => {
                    
    //                 const name = res.body.name
                    
    //                 name.should.equal("Bob")
    //             })
    //     })
    // })

    describe('/GET/:id ', () => {
        it('it should GET a order by the given id', (done) => {

            let order1 = new Order({ 

                name: "getid",
                email: "tolkien@gmail.com",
                mobile: "0411111111",
                items: [{item: "getid pie", price: 3, quantity: 2, options: ["extra sauce"] }],
                totalPrice: 6 
            });
            
            // console.log(order1)
            order1.save((err, order1) => {

            chai
                .request(app)
                .get("/orders/"+ order1.id)
                .send(order1)
                .end((err, res) => {

                    // console.log("res.body here for get id", res.body);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('email');
                    res.body.should.have.property('mobile');
                    res.body.should.have.property('items');
                    
                    done();
              })

            })
            
            
  
        });
    });

    describe("post request at /orders", function () {
        it("should post an order", function ()  {
            const order2 = {
                name: "posty",
                email: "tolkien@gmail.com",
                mobile: "0400123123",
                items: [{item: "Isengard pie", price: 3, quantity: 2, options: ["extra sauce"] }],
                totalPrice: 6
            }

            chai
                .request(app)
                .post("/orders/new")
                .send(order2)
                .end((err, res) => {
                    console.log(res.body);
                    res.body.should.have.property('name');
                    res.body.should.have.property('items');
                    res.body.should.have.property('totalPrice');
                    res.body.should.have.property('email');
                    res.body.should.have.property('mobile');
                })

        })
    })

})
