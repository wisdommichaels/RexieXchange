import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import giftcardRoutes from "./routes/giftcard.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import reviewRoutes from "./routes/review.routes.js";

// import CardRate from "./Models/rateModel.js";
// import GiftCard from "./Models/giftcardModel.js";
// import SalesTransaction from "./Models/sellModel.js";
// import User from "./Models/userModel.js";

dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:5173","http://localhost:5174","http://localhost:5175","https://gift-hub-29od.vercel.app"],
        credentials: true,
    }
))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth", authRoutes);
app.use("/api/giftcard", giftcardRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/review", reviewRoutes);
// app.use('/transaction', authMiddleware);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

connectdb();