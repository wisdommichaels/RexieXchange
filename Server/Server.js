import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";

import authRoutes from "./routes/auth.routes.js";


const app = express();
app.use(express.json());

dotenv.config()
const PORT = process.env.PORT || 4000;
connectdb();




app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});