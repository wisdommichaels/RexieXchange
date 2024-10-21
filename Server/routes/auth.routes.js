import express from 'express';
import { checkAuth, login, logout, signup } from '../Controllers/auth.controller.js'
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post("/signup", signup);
router.get("/checkAuth", verifyToken, checkAuth);

router.post("/login", login);

router.post("/logout", logout);

export default router;