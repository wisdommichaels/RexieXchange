import crypto from "crypto";
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
    const resetToken = crypto.randomBytes(32).toString("hex");
    const salt = await bcrypt.genSalt(10);
    const hashedToken = await bcrypt.hash(resetToken, salt);
  
    // Save token and expiry in the database
    user.resetToken = hashedToken;
    user.resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
    await user.save();
  
    // Send reset email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.COMPANY_EMAIL, pass: process.env.COMPANY_PASSWORD },
    });
  
    const resetUrl = `https://your-frontend.com/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset",
      html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
    });
  
    res.json({ message: "Password reset email sent." });
  }
  

//   reset password

export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    const user = await User.findOne({ resetToken: { $exists: true } });
  
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }
  
    const isTokenValid = await bcrypt.compare(token, user.resetToken);
    if (!isTokenValid) {
      return res.status(400).json({ message: "Invalid token." });
    }
  
    // Update the password
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();
  
    res.json({ message: "Password reset successful." });
  }