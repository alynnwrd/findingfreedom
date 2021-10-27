const router = require("express").Router();
const { Skills } = require("../../models");

router.get("/", async (req, res) => {
  //post something
  //login auth

  res.render("skills");
});
//post
router.post("/", async (req, res) => {
  console.log("line 12", req.body);
  try {
    //get the id, input value
    //check the table row names
    const newSkill = await Skills.create({
      personalSkills: req.body.userSkillsInput,
      skillDescription: red.body.skillDescriptionInput
    });
    res.status(200).json(newSkill);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
