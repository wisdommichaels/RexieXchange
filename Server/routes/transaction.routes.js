import express from 'express';
import { getTransaction, updateTransaction } from '../Controllers/transaction.countroller.js';

const router = express.Router();

router.get("/", getTransaction);
router.put("/update-transaction",  updateTransaction);

export default router;