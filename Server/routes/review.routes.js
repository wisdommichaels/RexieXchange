import express from 'express';
import { getReviews, postReviews, updateReview } from '../Controllers/review.controller.js';


const router = express.Router();

// post all reviwes
router.post("/", postReviews);
router.get("/get-review", getReviews);
router.put("/update-review", updateReview);

export default router;