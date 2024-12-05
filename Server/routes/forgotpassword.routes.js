import express from "express";
import { forgotPassword } from "../Controllers/forgotPassword.controller.js";

const router = express.Router();

// Request password reset
router.post("/", forgotPassword);


export default router;
