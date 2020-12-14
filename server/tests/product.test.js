const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();

describe("product CRUD operations", function () {
  describe("get all posts", function () {
    it(" /products should return with a status of 200", function () {
      chai
        .request(app)
        .get("/products")
        .end((err, res) => {
          res.should.have.status(200);
        });
    });

    it(" /products should return an object", function () {
      chai
        .request(app)
        .get("/products")
        .end((err, res) => {
          res.should.be.a("object")
        });
    });
  });
});
