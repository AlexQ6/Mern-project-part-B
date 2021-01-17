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
    const password = "1234"
    
    const newUser = {email, password}
    return User.create(newUser)
};

// before each test create a new User document
beforeEach(async function () {
    const user = await setupData();
    
    
});

// Delete User document
function tearDownData() {
	return Order.deleteMany()
}

// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

describe("User operations", function () {





    
})