const router = require("express").Router();
const { Education } = require("../../models");

router.get("/", async (req, res) => {
  //post something
  //auth
  res.render("education");
});
//post
router.post("/", async (req, res) => {
  console.log("req body there", req.body);
  try {
    //get the id, input value
    const newHeader = await Header.create({
      degree: req.body.userDesiredDegreeInput,
      schoolName: req.body.userInstituteInput,
      location: req.body.userLocationInput,
      startDate: req.body.userEdStartDateInput,
      graduateData: req.body.userEdEndDateInput,
    });
    res.status(200).json(newHeader);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update

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
