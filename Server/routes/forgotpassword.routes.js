import express from "express";
import { forgotPassword, resetPassword } from "../Controllers/forgotPassword.controller.js";

const router = express.Router();

// Request password reset
router.post("/", forgotPassword);

// Reset password
router.post("/reset-password", resetPassword);

export default router;
