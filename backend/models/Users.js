const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    emp_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },


})


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;