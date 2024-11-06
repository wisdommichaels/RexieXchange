import express from 'express';
import { sellGiftCard } from '../Controllers/sell.controller.js';


const router = express.Router();

// post all transactions
router.post("/", sellGiftCard);

export default router;