import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { createTransaction } from '../Controllers/transaction.countroller.js';

const router = express.Router();

// post all transactions
router.post("/", verifyToken, createTransaction);

export default router;