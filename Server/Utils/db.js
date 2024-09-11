import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const conn = await mongoose.connect( process.env.MONGO_URI,{
             dbname:"gifthub-db"
    });
        console.log("Connected to MongoDB successfully!", conn.connection.host);
    } catch (error) {
        console.log("Error connecting to Mongodb", error);
    }
}    

export default connectdb