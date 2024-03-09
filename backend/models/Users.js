const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true },
    email:{ type: String ,
        required:true},
    designation:{type:String,
        required:true},
    
    mobile:{type :Number,
        required:true}
})


const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel;