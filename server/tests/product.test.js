const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const Product = require("../models/Product");

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

// Create a test Product document
const setupData = () => {
  const name = "Potato";
  const description = "This is the best potato ever ma guyyy";
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
  productId = product._id;
});

// Delete Product document
const tearDownData = () => {
  return Product.deleteMany();
};

// After each test delete the Product document
afterEach((done) => {
  tearDownData().exec(() => done());
});

// Close the connection to the db once all the tests have been run
after((done) => {
  mongoose.disconnect(() => done());
});

describe("product CRUD operations", function () {
  // * READ - TESTS
  describe("get all products at /products", function () {
    it("should return with a status of 200", function () {
      chai
        .request(app)
        .get("/products")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });

    it("should return an array", function () {
      chai
        .request(app)
        .get("/products")
        .end((err, res) => {
          res.body.should.be.a("array");
        });
    });
  });

  describe("get one product at /product/:id", function () {
    it("should return one object with an id of 5fd6b677211f529748dedb53 with the name 'hamburger'", function () {
      chai
        .request(app)
        .get("/products/5fd6b677211f529748dedb53")
        .end((err, res) => {
          const name = res.body.name;
          name.should.equal("hamburger");
        });
    });

    it("should have all 6 fields: name, image, description, price, options, tags", function () {
      const fields = [
        "name",
        "description",
        "price",
        "tags",
        "options",
        "image",
        "_id",
        "__v",
      ];
      chai
        .request(app)
        .get("/products/5fd6b677211f529748dedb53")
        .end((err, res) => {
          const hasKeys = Object.keys(res.body).map((key) =>
            fields.includes(key)
          );
          hasKeys.should.not.contain(false);
        });
    });
  });
});
