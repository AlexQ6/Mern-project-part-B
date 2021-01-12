const { model } = require("mongoose");
const Admin = require("../models/Admin");


const createUser = (req, res) => {
    return new Admin(req.body);
};

const verifyUser = (req, res) => {
    return Admin.findById(req.params.id);
};

const updateUser = (req, res) => {

    return Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
};

module.exports = {
    createUser,
    verifyUser,
    updateUser
}