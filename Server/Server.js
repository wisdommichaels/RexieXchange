import dotenv from "dotenv"
import connectdb from "./Utils/db.js";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";


const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173","http://localhost:5174"],
    }
))

dotenv.config()
const PORT = process.env.PORT || 3000;




app.get('/', (req, res) =>{
    res.end ("server is working")
})


app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

connectdb();