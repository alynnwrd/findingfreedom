const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { userName: req.body.userName } });

    if (!userLogin) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
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
