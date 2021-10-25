const router = require("express").Router();
const { User, Header } = require("../models");
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

//home route get.
//withAuth
router.get('/', withAuth, async (req, res) => {
  
  res.render("homepage", { logged_in: req.session.logged_in });
});

//login
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


/*router.post('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});*/

//sign-up page
router.get("/signup", async (req, res) => {
  res.render("register");
});

//signing-up user
router.post('/signup', async (req, res) => {
  console.log("===signing-up=====");
  try {
    const userData = await User.create({
      userName: req.body.newUserName,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.logged_in= true,
      res.status(200).json(userData);
    })
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
    
  }
})
//logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
