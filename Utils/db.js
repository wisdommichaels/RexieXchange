import  mongoose from "mongoose";

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbname:"finnal-project"
        });
            console.log("Connected to MongoDB", conn.connection.host);
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
    
}
export default connectdb;
