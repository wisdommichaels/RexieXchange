import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../Utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {username, email, password, confirmPassword} = req.body;
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password != confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const user= await User.findOne({username})
        
        if(user){
            return res.status(400).json({message: "User already exists" });
        }

        // Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const defaultProfilePic = `https://avatar.iran.liara.run/username?username=[firstname+lastname]`;

        const newUser = new  User({ 
            username, 
            email, 
            password: hashedPassword,
            profilePic: defaultProfilePic
        });

        if(newUser){
            // generate jwt token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
    
            res.status(201).json({ 
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }else{
            res.status(400).json({ message: "Invalid user data" });
        }


    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}


export const login = async (req, res) => {
    try { 
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isPasswordCorrect  = await bcrypt.compare(password, user?.password || "");
       
       if(!user || !isPasswordCorrect){
           return res.status(400).json({ error: "Invalid username or password" });
       }
        // generateTokenAndSetCookie(newUser._id, res);
        console.log("got here");
        const token = await generateTokenAndSetCookie(user._id, res);

        
        res.status(200).json({ 
            _id: user._id,
            username: user.username,
            email: user.email,
            token:token
        });
        
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
   
}
 
export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
        
 
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error:"internal Server Error"}); 
    }
}

export const checkAuth= async (req, res) => {
    try {
        console.log(req.userId);
        
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({error:"internal Server Error"});  
    }
    
}