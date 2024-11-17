import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { postContacts } from "../Controllers/contact.controller.js";

const router = express.Router();

// Define a route for posting all users
router.post("/", verifyToken, postContacts)

export default router;