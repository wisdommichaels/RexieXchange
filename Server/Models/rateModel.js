import mongoose from "mongoose";
const giftCardrateSchema = new mongoose.Schema({
        countryname:String,
        currencycode:String,
        currencySymbol:String,
        flag:String,   
},{timestamps :true}) 

const CardRate = mongoose.model('Card_rate', giftCardrateSchema);

export default CardRate;