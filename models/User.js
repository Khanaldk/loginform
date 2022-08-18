import mongoose from "mongoose";

//for table struture
//database schema  "new mongoose.Schema"

const userSchema= new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    // newpassword:{type:String,required:true,trim:true},
    join:{type:Date,default:Date.now}

})

//Model "mongoose.model"
const UserModel= mongoose.model("user",userSchema)

export default UserModel

