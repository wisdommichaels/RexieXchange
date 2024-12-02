import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    accountDetails:[{
        accountName:String,
        accountNumber:String,
        bankName:String,
    }],
    profilePic:{
        type:String,
        default: ""
    },  
},{timestamps :true}) 

const User = mongoose.model('User', userSchema);

export default User;