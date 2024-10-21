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
            name: "Apple Gift Card",
            value: 1700,
            imageUrl: "https://res.cloudinary.com/dfdjpafgs/image/upload/nc0pjbxak4d4ditypeet.jpg"
        }
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