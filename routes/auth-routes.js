const router = require('express').Router();
const passport = require('passport');
// Auth Login
router.get('/login', (req, res) => {
  res.render('login', {user : req.user});
});

// Auth LogOut
router.get('/logout', (req, res) => {
  // Handle with Passport
  req.logout();
  res.redirect('/');
});

// Auth with Google
router.get('/google',passport.authenticate('google', {
  scope : ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
  //res.send(req.user);
  res.redirect('/profile/');
});

module.exports = router;
