const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const mongoose = require("mongoose");
const User = require("../models/User");

// * CHAI CONFIG
const should = require("chai").should();
chai.use(chaiHttp);

const setupData = () => {
    
    const email = "bob@gmail.com";
    const password = "12345678"
    
    const newUser = {email, password}
    return User.create(newUser)
};

// before each test create a new User document
beforeEach(async function () {
    const user = await setupData();
    
    
});

// Delete User document
function tearDownData() {
	return User.deleteMany()
}

// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

describe("User authentication", function () {

    const user1 = {
        email: "test@test.com",
        password: "22222222"
    }

    describe("Login user", function () {

        it("should return with successful redirect" , function () {

            chai
                .request(app)
                .post("/user/login")
                .send(user1)
                .end((err,res) => {
                    // console.log(res.body);
                    res.should.have.status(302)
                    res.header['location'].should.include("/")
                    res.text.should.include("Logged In")
                
            })


        })    


    })

    describe("Register user", function () {

        it("should create new user" , function () {

            chai
                .request(app)
                .post("/user/register")
                .send(user1)
                .end((err,res) => {
                    console.log(res.body);
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                
            })

        })


    })




    describe("Logout user", function () {
        it("should return logged out message", function () {

            chai
                .request(app)
                .get("/user/logout")
                .end((err, res) => {
                    res.text.should.include("Logged Out")
                })

        })
    })




})