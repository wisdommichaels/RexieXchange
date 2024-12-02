import express from 'express';
import { checkAuth, login, logout, signup, updateUserProfile } from '../Controllers/auth.controller.js'
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post("/signup", signup);

// Middleware to verify token before accessing protected routes
router.get("/checkAuth", verifyToken, checkAuth);

router.post("/login", login);

router.post("/logout", logout);

router.post("/updateuserprofile",verifyToken, updateUserProfile);

export default router;