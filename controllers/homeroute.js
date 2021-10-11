const router = require('express').Router();
const { User, Header } = require('../models');
const sequelize = require("../config/connection");
const withAuth = require('../utils/auth');

//home route get.
//withAuth
router.get('/', async (req, res) => {
  res.render("homepage", { logged_in: req.session.logged_in });
  
});

router.get('/login', async (req, res) => {
  
  
  res.render("login");
});


router.get('/signup', async (req, res) => {
  
  res.render("register");
});


/*router.get('/', withAuth, async (req, res) => {
  
  res.render("homepage", { logged_in: req.session.logged_in });
});

//login
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});*/

module.exports = router;