import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import giftcardRoutes from "./routes/giftcard.routes.js";
import CardRate from "./Models/rateModel.js";

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
    await CardRate.create([
        {
            countryName:"United States",
            currencyCode:"USD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602032/unitedstate_fu7bmx.svg"
        },
        {
            countryName:"United Kingdom",
            currencyCode:"GBP",
            currencySymbol: "£",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602032/unitedkingdom_xjx79l.svg"
        },
        {
            countryName:"Singapore",
            currencyCode:"SGD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602030/singapore_cblnoc.svg"
        },
        {
            countryName:"Hong Kong",
            currencyCode:"HKD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602032/unitedstate_fu7bmx.svg"
        },
        {
            countryName:"Canada",
            currencyCode:"CAD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/canada_tlghw6.svg"
        },
        {
            countryName:"Austrilia",
            currencyCode:"AUD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/australia_q7ke0l.svg"
        },
        {
            countryName:"Mexico",
            currencyCode:"MXN",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602029/mexico_scoh0h.svg"
        },
        {
            countryName:"France",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602026/france_kxbm04.svg"
        },
        {
            countryName:"Taiwan",
            currencyCode:"TWD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602031/taiwan_p7jd8m.svg"
        },
        {
            countryName:"Brazil",
            currencyCode:"BRL",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/brazil_v8y5eh.svg"
        },
        {
            countryName:"Switzerland",
            currencyCode:"CHF",
            currencySymbol: "FR",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602031/switzerland_dvog4a.svg"
        },
        {
            countryName:"Spain",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602031/spain_z51fop.svg"
        },
        {
            countryName:"Thailand",
            currencyCode:"THB",
            currencySymbol: "฿",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602032/thailand_vbolyf.svg"
        },
        {
            countryName:"Denmark",
            currencyCode:"DKK",
            currencySymbol: "kr",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/dernmark_iwmeag.svg"
        },
        {
            countryName:"South Africa",
            currencyCode:"ZAR",
            currencySymbol: "R",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602030/southafrica_j6zyqw.svg"
        },
        {
            countryName:"Germany",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602026/germany_l8u4sb.svg"
        },
        {
            countryName:"Nertherland",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/nerthaland_iukly2.svg"
        },
        {
            countryName:"Italy",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602029/italy_phlrwe.svg"
        },
        {
            countryName:"Portugal",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602029/portugal_rvngpl.svg"
        },
        {
            countryName:"Japan",
            currencyCode:"JPY",
            currencySymbol: "¥",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602029/japan_rva6al.svg"
        },
        {
            countryName:"New Zealand",
            currencyCode:"NZD",
            currencySymbol: "$",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602026/newzealand_m82cer.svg"
        },
        {
            countryName:"Sweden",
            currencyCode:"SEK",
            currencySymbol: "kr",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602031/sweeden_oeq4r3.svg"
        },
        {
            countryName:"Norway",
            currencyCode:"NOK",
            currencySymbol: "kr",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602027/norway_r2xgkq.svg"
        },
        {
            countryName:"Poland",
            currencyCode:"PLN",
            currencySymbol: "zł",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602028/poland_splozi.svg"
        },
        {
            countryName:"Greece",
            currencyCode:"EUR",
            currencySymbol: "€",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602027/greece_cyoips.svg"
        },
        {
            countryName:"China",
            currencyCode:"CNY",
            currencySymbol: "¥",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602025/chaina_ys6hcb.svg"
        },
        {
            countryName:"United Arab Emirates",
            currencyCode:"AED",
            currencySymbol: "د.إ",
            flag: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729602032/unitedarb_kxyzmy.svg"
        },
    ])
    console.log("successful");
}

populateCard();

app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth", authRoutes);
app.use("/api/giftcard", giftcardRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

connectdb();