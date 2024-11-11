import express from 'express';
import { sellGiftCard } from '../Controllers/sell.controller.js';
import { authMiddleware } from '../middleware/verifyToken.js';
import { checkAuth } from '../Controllers/auth.controller.js';


const router = express.Router();

// post all transactions
router.post("/", sellGiftCard, authMiddleware, checkAuth);

export default router;