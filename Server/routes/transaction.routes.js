import express from 'express';
import { sellGiftCard } from '../Controllers/sell.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// post all transactions
router.post("/", verifyToken, sellGiftCard);

export default router;