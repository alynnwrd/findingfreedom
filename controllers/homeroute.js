const router = require('express').Router();
const { User, Header } = require('../models');
const sequelize = require("../config/connection");

//home route get.
router.get('/', async (req, res) => {
  
  res.render("homepage");
});

router.get('/login', async (req, res) => {
  
  
  res.render("login");
});


router.get('/signup', async (req, res) => {
  
  res.render("register");
});



module.exports = router;