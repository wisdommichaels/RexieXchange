import express from 'express';
import { postEmails } from '../Controllers/newsLetter.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';


const router = express.Router();

// post all emails
router.post("/", verifyToken, postEmails);


export default router;