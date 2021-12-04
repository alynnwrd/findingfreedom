const router = require("express").Router();
const { Header } = require("../../models");
const { Education } = require("../../models");
const { Experience } = require("../../models");
const { Skills } = require("../../models");
const { User } = require("../../models");
router.get("/", async (req, res) => {
  //find method
  res.render("resume");
});


module.exports = router;