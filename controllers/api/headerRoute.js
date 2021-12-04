const router = require("express").Router();
const { Header } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/",  withAuth, async (req, res) => {
  //find method
  res.render("header", { logged_in: req.session.logged_in });
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
    console.log('line:22', newHeader);
    res.status(200).json(newHeader);
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
