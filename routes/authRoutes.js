const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/login', authController.renderLogin);
router.get('/dashboard', authController.renderDashboard);

router.get('/user', authController.getProfileData);
router.get('/logout', authController.logout);

router.get('/google', passport.authenticate('google', { 
  scope: ['profile', 'email'] 
}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => {
    res.redirect('/auth/dashboard');
  }
);

module.exports = router;
