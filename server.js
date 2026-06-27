require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Initialize Express Sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if utilizing HTTPS
}));

// Initialize Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Apply Auth Routes with a base path prefix
app.use('/auth', authRoutes);

// Catch-all route to redirect users to login view
app.get('*', (req, res) => {
  res.redirect('/auth/login');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server executing live on http://localhost:${PORT}`));
