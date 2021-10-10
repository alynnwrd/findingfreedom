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
    res.redirect("/education");
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

//update the header
/*router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  try {
    const headerUpdate = await Header.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phone: req.body.phone,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully.
    res.status(200).json(headerUpdate);
  } catch (err) {
      res.status(500).json(err);
    };
});*/

module.exports = router;
