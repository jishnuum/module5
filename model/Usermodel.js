const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        min:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }

})

const userModel = new mongoose.model("users",userSchema)

module.exports = {userModel}