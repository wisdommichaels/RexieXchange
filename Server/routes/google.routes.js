import express from 'express';
import passport from 'passport';

const router = express.Router();

// Redirect to Google login page
router.get('/auth/google', passport.authenticate('google', { 
    scope: ['profile', 'email'] 
}));

// Callback route after Google login
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful login, redirect to your frontend
    res.redirect('http://localhost:3000/dashboard');
  }
);

// Logout route
router.get('/auth/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});


export default router;