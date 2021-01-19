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

    // describe("Login user", function () {

    //     const user1 = {
    //         email: "test@test.com",
    //         password: "22222222"
    //     }

    //     it("should return with successful redirect" , function (done) {

    //         chai
    //             .request(app)
    //             .post("/user/login")
    //             .send(user1)
    //             .end((err,res) => {
                    
                    
    //                 // res.header['location'].should.include("/")
                    
    //                 res.body.should.have.property('password');
    //                 res.body.should.have.property('email');

    //                 done()

                    
                   
    //         })


    //     })   

    // })

    // describe("Register user", function () {

    //     const user2 = {
    //         email: "test2@test.com",
    //         password: "22222222"
    //     }

    //     it("should create new user" , function (done) {

    //         chai
    //             .request(app)
    //             .post("/user/register")
    //             .send(user2)
    //             .end((err,res) => {
    //                 console.log(res.body);
    //                 res.body.should.have.property('email');
    //                 res.body.should.have.property("password");
                    
    //                 done()
    //         })

    //     })


    // })




    describe("Logout user", function () {
        it("should return logged out message", function (done) {

            chai
                .request(app)
                .get("/user/logout")
                .end((err, res) => {
                    res.text.should.include("Logged Out")

                    done()
                })

        })
    })




})