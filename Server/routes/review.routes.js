import express from 'express';
import { getReviews, postReviews, updateReview } from '../Controllers/review.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';


const router = express.Router();

// post all reviwes
router.post("/", verifyToken, postReviews);
router.get("/get-review", getReviews);
router.put("/update-review", updateReview);

export default router;