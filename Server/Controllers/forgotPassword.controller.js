import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import User from "../Models/userModel.js";


export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    // Generate a reset token
    const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{
      expiresIn:'5m'
  });
    user.resetToken = await bcrypt.hash(token, 10);
    user.resetTokenExpiry = Date.now() + 300000; // 5 minutes
    await user.save();
    
    // Send reset email
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.COMPANY_PASSWORD
    }
  });
  
  const resetUrl = `https://www.rexiexchange.com.ng/resetpassword/${user._id}/${token}`;
  var mailOptions = {
    from: process.env.COMPANY_EMAIL,
    to: user.email,
    subject: 'Reset Password',
    html: `<p>You requested a password reset. KIndly click <a href="${resetUrl}">here</a> to reset your password.</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.json({ message: "Password reset email sent." });



}

//   reset password
// export const resetPassword = async (req, res) => {
//     const { id, token } = req.params;
//     const { password } = req.body;

//    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) {
//       return res.status(400).json({ message: "Invalid or expired token." });
//     }else{
//       bcrypt.hash(password, 10)
//       .then(async (hash) => {
//         await User.findByIdAndUpdate({_id: id}, { password: hash });
//         res.json({ message: "Password reset successful." })
//       .catch(err => {
//         res.status(500).json({ message: "An error occurred" });
//       });
//       })
//     }
//   });
// }


export const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded) {
          return res.status(400).json({ message: "Invalid or expired token." });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update the user's password in the database
      const user = await User.findByIdAndUpdate(
          id,
          { password: hashedPassword },
          { new: true } // Returns the updated document
      );

      if (!user) {
          return res.status(404).json({ message: "User not found." });
      }

      // Respond with success message
      return res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
          return res.status(400).json({ message: "Invalid or expired token." });
      }

      // Handle other errors
      return res.status(500).json({ message: "An error occurred while resetting the password." });
  }
};
