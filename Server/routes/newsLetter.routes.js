import express from 'express';
import { postEmails } from '../Controllers/newsLetter.controller.js';


const router = express.Router();

// post all emails
router.post("/", postEmails);


export default router;