const router = require('express').Router();
const { User, Header } = require('../models');
const sequelize = require("../config/connection");

//home route get.
router.get('/', async (req, res) => {
  
  res.render("homepage.hbs");
});





module.exports = router;