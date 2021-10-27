const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { userName: req.body.userName } });

    if (!userLogin) {

      console.log('line:6', userLogin);
      res
        .status(400)
        .json({ message: "Incorrect userName or password, please try again" });
      return;
    }

    console.log('line:17', req.body.userName);
    const validPassword = await userLogin.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userLogin.id;
      req.session.logged_in = true;

      res.json({ user: userLogin, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});





/*router.post('/signup', async (req, res) => {
  console.log("===signing-up=====");
  try {
    const userData = await User.create({
      userName: req.body.userName,
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
})*/

module.exports = router;
