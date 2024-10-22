import mongoose from "mongoose";
const giftCardrateSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true,
    },   
    countryname:{
        type:String,
        required:true,
        unique:true
    },
    currencycode:{
        type:String,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
        unique:true
    },
   
   
},{timestamps :true}) 

const CardRate = mongoose.model('Card_rate', giftCardrateSchema);

export default CardRate;