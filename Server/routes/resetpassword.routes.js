import express from "express";
import { resetPassword } from "../Controllers/forgotPassword.controller.js";

const router = express.Router();

// Reset password
router.post("/:id/:token", resetPassword);

export default router;