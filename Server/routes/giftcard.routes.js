import express from 'express';
import { getGiftCards, updateGiftCard } from '../Controllers/giftcard.controller.js';

const router = express.Router();

router.get("/", getGiftCards);
router.put("/update-card", updateGiftCard);
router.put("/sell-card",);

export default router;