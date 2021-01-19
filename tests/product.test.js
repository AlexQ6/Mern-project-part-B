const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Product = require("../models/Product");

// * CHAI CONFIG
const should = require("chai").should();
chai.use(chaiHttp);



// Create a test Product document
const setupData = () => {
    const name = "hamburger";
    const description = "This is the best hamburger ever ma guyyy";
    const price = 53.82;
    const image =
        "https://cdn.vox-cdn.com/thumbor/tdEOBffgQIki4wT2_m6s1ZcN87U=/0x0:640x480/1200x800/filters:focal(269x189:371x291)/cdn.vox-cdn.com/uploads/chorus_image/image/63710320/ur-cute-potato.0.1539757238.0.png";
    const tags = [{ name: "Vegan", color: "Green" }];
    const options = [{ name: "Add Sauce", price: 12.0 }];
    const newProduct = { name, description, price, image, tags, options };
    return Product.create(newProduct);
};

// before each test create a new Product document
beforeEach(async function () {
    const product = await setupData();
    const productId = product._id;
    
});

// Delete Product document
const tearDownData = () => {
    return Product.deleteMany();
};

// After each test delete the Product document
afterEach((done) => {
    tearDownData().exec(() => done());
});


describe("product CRUD operations", function () {
  
    // * READ - TESTS
    describe("get all products at /products", function () {
        it("should return with a status of 200", function () {
            chai.request(app)
                .get("/products")
                .end((err, res) => {
                    res.should.have.status(200);
                });
        });

        it("should return an array", function () {
            chai.request(app)
                .get("/products")
                .end((err, res) => {
                    should.exist(res.body);
                    
                    res.body.should.be.a("array");
                });
        });
    });

    describe("get one product at /products/:id", function () {
        let product1 = new Product({
            name: "vegan chocolate",
            description: "tasty",
            price: 3,
            tags: [{ name: "Vegan", color: "Green" }],
            options:[{ name: "Add Sauce", price: 12.0 }]

        })

        it("should return one object with all data fields", function (done) {
            

            product1.save((err,product1) => {
                chai
                    .request(app)
                    .get("/products/"+ product1.id)
                    .send(product1)
                    .end((err,res) => {

                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('price');
                        res.body.should.have.property('tags');
                        res.body.should.have.property('options');
                        res.body.should.have.property('options');
                        res.body.should.have.property('__v');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('image');
                        done()

                    })

            })

           
        });

        
    });

    describe("Add new product via post request", function () {
        it("should post an product", function ()  {

            const product2 = {
                name: "meat pie",
                description: "meaty",
                price: 4,
                tags: [{}],
                options:[{}]

            }

            chai 
                .request(app)
                .post("/products/new")
                .send(product2)
                .end((err, res) => {
                    
                    res.body.should.have.property('name');
                    res.body.should.have.property('description');
                    res.body.should.have.property('price');
                    res.body.should.have.property('tags');
                    res.body.should.have.property('options');
                })

        })
    })

    describe("PUT edit/:id product", () => {
        it('it should UPDATE a product given id', (done) => {
            const product3 = new Product({
                name: "bacon and eggs sandwich",
                description: "tasty brekky",
                price: 8,
                tags: [{}],
                options:[{}]
            })

            product3.save((err, product3) => {
                chai
                    .request(app)
                    .put("/products/edit/" + product3.id)
                    .send(product3)
                    .end((err, res) => { 
                        
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql("bacon and eggs sandwich");

                        done()
                        
            
                    });


            })
            
            
    
        });
    });




});
