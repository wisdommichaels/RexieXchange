import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    cardname:{
        type:String,
        required:true,
        unique:true
    },
    countrycode:{
        type:String,
        required:true,
    },
    cardnumber:{
        type: Number,
        required:true,
    },
    cardimage:{
        type:String,
        required:true,
    }, 
    amount:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['pending', 'succesful', 'faild'],
        default: 'pending'
    },
   
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},{timestamps :true}) 

const SalesTransaction = mongoose.model('Transactions', transactionSchema);

export default SalesTransaction;