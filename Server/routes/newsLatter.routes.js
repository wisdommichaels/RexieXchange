import express from 'express';
import { getEmails, postEmails } from '../Controllers/newsLetter.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

// post all emails
router.post("/", verifyToken, postEmails);
router.get("/get-emails", getEmails);


export default router;