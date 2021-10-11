const router = require("express").Router();
const { Header } = require("../../models");

router.get("/", async (req, res) => {
  //find method
  res.render("header");
});

//post
router.post("/", async (req, res) => {
  try {
    const newHeader = await Header.create({
      firstName: req.body.userFirstNameInput,
      lastName: req.body.userLastNameInput,
      address: req.body.userAddressInput,
      city: req.body.userCityInput,
      state: req.body.userStateInput,
      zipCode: req.body.userZipInput,
      phone: req.body.userPhoneInput,
      email: req.body.userEmailInput,
    });
    res.redirect("/education", newHeader);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log("req body there", req.body);
  try {
    const headerUpdate = await Header.update(
      {
        firstName: req.body.userFirstNameInput,
        lastName: req.body.userLastNameInput,
        address: req.body.userAddressInput,
        city: req.body.userCityInput,
        state: req.body.userStateInput,
        zipCode: req.body.userZipInput,
        phone: req.body.userPhoneInput,
        email: req.body.userEmailInput,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(headerUpdate);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
