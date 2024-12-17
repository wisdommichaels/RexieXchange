import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { approveTransaction, createTransaction, getMyTransactions } from '../Controllers/transaction.countroller.js';

const router = express.Router();

// post all transactions
router.post("/", verifyToken, createTransaction);
router.get("/", approveTransaction);
router.get("/getMyTransactions",verifyToken, getMyTransactions);


export default router;