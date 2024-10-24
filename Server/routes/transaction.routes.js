import express from 'express';
import { getTransaction, sell, updateTransaction } from '../Controllers/transaction.countroller.js';

const router = express.Router();

router.get("/", getTransaction);
router.put("/update-transaction",  updateTransaction);
router.put("/sell-transaction", sell);

export default router;