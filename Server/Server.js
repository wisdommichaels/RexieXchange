import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import giftcardRoutes from "./routes/giftcard.routes.js";
import GiftCard from "./Models/giftcardModel.js";

dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:5173","http://localhost:5174"],
        credentials: true,
    }
))

const PORT = process.env.PORT || 3000;

const populateCard =async() => {

    await GiftCard.create([
        {
            name: "Apple/Itunes Gift Card",
            value: 1700,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729558949/applecardpng_x0d8rz.svg"
        },
        {
            name: "RazerGold Gift Card",
            value: 1510,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557031/razergoldpng_sfpvpq.svg"
        },
        {
            name: "Amazon Gift Card",
            value: 1000,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729556260/amazonpng_eit9uq.svg"
        },
        {
            name: "Steam Gift Card",
            value: 1800,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557182/steampng_eqpqr8.svg"
        },
        {
            name: "Walmart Gift Card",
            value: 1745,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557184/walmartgiftcardpng_lwmkm6.svg"
        },
        {
            name: "eBay Gift card",
            value: 1900,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557179/ebaypng_thjw6g.svg"
        },
        {
            name: "American Express",
            value: 1300,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557179/americanexpresspng_fggzy8.svg"
        },
        {
            name: "Google Play Gift Card",
            value: 1190,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557452/googleplaypng_g9wjwo.svg"
        },
        {
            name: "Vanilla Gift card",
            value: 1200,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557183/vanillapng_yhhuat.svg"
        },
        {
            name: "PlayStation Gift Card",
            value: 1850,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557589/playstationpng_o6yawf.svg"
        },
        {
            name: "CVS pharmacy Gift Card",
            value: 1740,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557179/cvspng_tog4nz.svg"
        },
        {
            name: "Foot Locker Gift Card",
            value: 1720,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557671/footlockerpng_uejqnu.svg"
        },
        {
            name: "Mastercard Gift Card",
            value: 1790,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557180/mastercardpng_kicfjl.svg"
        },
        {
            name: "Netspend Gift Card",
            value: 1560,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557775/netspendpng_aizaux.svg"
        },
        {
            name: "Roblox Gift Card",
            value: 1630,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557032/robloxpng_pc0isq.svg"
        },
        {
            name: "VISA Gift Card",
            value: 1810,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557183/visapng_nrji67.svg"
        },
        {
            name: "Walmart Money Gift Card",
            value: 1355,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557185/walmartmoneypng_qxsxhu.svg"
        },
        {
            name: "GameStop Gift Card",
            value: 1930,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557875/gamestoppng_skkfaz.svg"
        },
        {
            name: "Nordstrom Gift Card",
            value: 1670,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557181/nordstrompng_dhw0po.svg"
        },
        {
            name: "Paysafecard Gift Card",
            value: 1180,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557181/paysafecardpng_olragl.svg"
        },
        {
            name: "Sephora Gift Card",
            value: 1420,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557182/sephorapng_mfeszx.svg"
        },
        {
            name: "Xbox Gift Card",
            value: 1380,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557186/xboxpng_l8trod.svg"
        },
        {
            name: "Nike  Gift Card",
            value: 1710,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729557180/nikepng_soyoub.svg"
        },
        {
            name: "Macy's Gift Card",
            value: 1730,
            imageUrl: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729558892/macyspng_beixhc.svg"
        },
    ])
    console.log("successful");
}

// populateCard();

app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth", authRoutes);
app.use("/api/giftcard", giftcardRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

connectdb();