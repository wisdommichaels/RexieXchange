import mongoose from "mongoose";
const giftCardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    value:{
        type:Number,
        required:true,
        unique:true
    },
    imageUrl:{
        type:String,
        required:true,
    },   
},{timestamps :true}) 

const GiftCard = mongoose.model('gift_cards', giftCardSchema);

export default GiftCard;