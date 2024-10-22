import mongoose from "mongoose";
const giftCardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    subDesc:{
        type:[String],
    },
    imageUrl:{
        type:String,
        required:true,
    },   
    rates:[{
        rate:Number,
        rateDetails:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "CardRate",
        }
    }],
},{timestamps :true}) 

const GiftCard = mongoose.model('gift_cards', giftCardSchema);

export default GiftCard;