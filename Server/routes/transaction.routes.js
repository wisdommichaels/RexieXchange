import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { approveTransaction, createTransaction } from '../Controllers/transaction.countroller.js';

const router = express.Router();

// post all transactions
router.post("/", verifyToken, createTransaction);
router.get("/", approveTransaction);

export default router;