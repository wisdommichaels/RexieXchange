import express from 'express';
import { getReviews } from '../Controllers/review.controller.js';


const router = express.Router();

// post all reviwes
router.post("/", getReviews);

export default router;