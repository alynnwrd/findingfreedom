const router = require("express").Router();
const { User } = require("../../models");

router.get("/login", async (req, res) => {
  res.render("header.hbs");
});

module.exports = router;
