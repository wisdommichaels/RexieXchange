import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";

import authRoutes from "./Server/routes/auth.routes.js";


const app = express();
app.use(express.json());

dotenv.config()
const PORT = process.env.PORT;
connectdb();




app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth/", authRoutes, (req, res) =>{
    res.send("I am working")
    });

app.listen(PORT, ()=>{
    console.log("Server is running on port ${PORT}");
});