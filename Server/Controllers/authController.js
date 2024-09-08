import User from "Models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../../Utils/generateToken";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const user= await User.findOne ({name})
        if(user){
            return res.status(400).json({message: "User already exists" });
        }
        const userEmail= await User.findOne ({email})
        if(userEmail){
            return res.status(400).json({message: "Email already exists" });
        }
        if (password.length<8) {
            return res.status(400).json({message: "Password must be at least 8 characters long" });
        }
        if (condition) {
            
        }
    } catch (error) {
        
    }}