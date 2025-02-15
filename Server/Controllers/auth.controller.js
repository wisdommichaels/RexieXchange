import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../Utils/generateToken.js";
// import passport from "passport";
// import GoogleStrategy from "passport-google-oauth20/lib/strategy.js";


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
        
        const defaultProfilePic = `https://avatar.iran.liara.run/public/boy?username=[value]`;

        const newUser = new  User({ 
            username, 
            email, 
            password: hashedPassword,
            profilePic: defaultProfilePic
        });

        if(newUser){
            // generate jwt token here
            const token = await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
    
            res.status(201).json({ 
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic,
                token: token
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

// update userProfile
export const updateUserProfile = async (req, res) => {
    const {profilePic, username, accountName, accountNumber, bankName } = req.body;
    try {
        const user = await User.findById(req.userId);
        if(!user){
            return res
            .status(404)
            .json({ message: "User not found" });
        }
        user.profilePic = profilePic === "clear" ? "" : profilePic || user.profilePic;
        user.username = username || user.username;
        user.accountDetails.accountName = accountName || user.accountDetails.accountName;
        user.accountDetails.accountNumber = accountNumber || user.accountDetails.accountNumber;
        user.accountDetails.bankName = bankName || user.accountDetails.bankName;
        await user.save();
        res.status(200).json(user);
    }
    catch (error) {
        console.log("Error in updateUserProfile controller", error.message);
        res.status(500).json({error:"internal Server Error"});  
    }
}



// google login


// Set up Google OAuth
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:5000/auth/google/callback",
// },
// async (accessToken, refreshToken, profile, done) => {
//   try {
//     // Handle user info from Google profile
//     const user = await User.findOne({ googleId: profile.id });
//     if (!user) {
//       // If user doesn't exist, create a new one
//       const newUser = await User.create({
//         googleId: profile.id,
//         email: profile.emails[0].value,
//         name: profile.displayName,
//         avatar: profile.photos[0].value,
//       });
//       return done(null, newUser);
//     }
//     return done(null, user); // Existing user
//   } catch (error) {
//     return done(error, null);
//   }
// }));

// // Serialize and deserialize user
// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   const user = await User.findById(id);
//   done(null, user);
// });


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

// check if user has account details 
export const checkAccountDetails = async (req, res) => {
    try {
      // Fetch the user
      const user = await User.findById(req.userId);
  
      // Handle user not found
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Destructure accountDetails for clarity
      const { accountDetails } = user;
      const { accountName, accountNumber, bankName } = accountDetails || {};
  
      // Check if all account details exist
      if (accountName && accountNumber && bankName) {
        return res.status(200).json({ message: "User has account details" });
      }
  
      // User missing account details
      return res.status(400).json({ message: "User has no account details" });
    } catch (error) {
      // Log the error with relevant information
      console.error("Error in checkAccountDetails:", {
        message: error.message,
        stack: error.stack,
      });
  
      // Return internal server error response
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  



