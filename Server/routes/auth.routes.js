import express from 'express';
import { login, logout, signup } from '../Controllers/auth.controller.js'

const router = express.Router();

router.get("/signup", signup);
router.get("/", (req,res)=>{
    res.send("i work")
});

router.get("/login", login);

router.get("/logout", logout);

export default router;