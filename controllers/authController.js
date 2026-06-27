const path = require('path');

const authController = {
  renderLogin: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
  },

  renderDashboard: (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/auth/login');
    }
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
  },

  getProfileData: (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(req.user);
  },

  logout: (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect('/auth/login');
    });
  }
};

module.exports = authController;
