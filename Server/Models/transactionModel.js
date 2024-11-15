import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    cardName:{
        type:String,
        required:true,
    },
    countryCode:{
        type:String,
        required:true,
    },
    cardNumber:{
        type: String,
        required:true,
    },
    cardImage:{
        type:String,
        required: true,
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