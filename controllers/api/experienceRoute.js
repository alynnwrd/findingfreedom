const router = require("express").Router();
const { Experience } = require("../../models");

router.get("/", async (req, res) => {
  //post something
  //login auth

  res.render("experience");
});
//post
router.post("/", async (req, res) => {
  console.log("line:12", req.body);
  try {
    //get the id, input value
    //check the table row names
    const newExperience = await Experience.create({
        jobTitle : req.body.userJobTitleInput,
        employer: req.body.userEmployerInput,
        city: req.body.userCityInput,
        state: req.body.userStateInput,
        startDate: req.body.userStartDateInput,
        endDate: req.body.userEndDateInput,
    });
    res.status(200).json(newExperience);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

