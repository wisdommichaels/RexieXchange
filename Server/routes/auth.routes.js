import express from 'express';
import { login, logout, signup } from '../Controllers/auth.controller.js'

const router = express.Router();

router.get("/api/auth/signup", signup);

router.get("/api/auth/login", login);

router.get("/api/auth/logout", logout);

export default router;