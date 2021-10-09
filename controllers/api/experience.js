const router = require("express").Router();
const { Experience } = require("../../models");

router.get("/", async (req, res) => {
  //post something
  //login auth

  res.render("experience");
});
//post
router.post("/", async (req, res) => {
  console.log("req body there", req.body);
  try {
    //get the id, input value
    //check the table row names
    const newExperience = await Experience.create({
      firstName: req.body.userFirstNameInput,
      lastName: req.body.userLastNameInput,
      address: req.body.userAddressInput,
      city: req.body.userCityInput,
      state: req.body.userStateInput,
      zipCode: req.body.userZipInput,
      phone: req.body.userPhoneInput,
      email: req.body.userEmailInput,
    });
    res.status(200).json(newExperience);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

