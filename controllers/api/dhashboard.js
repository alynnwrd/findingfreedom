const router = require("express").Router();
const { Header } = require("../../models");

router.get("/", async (req, res) => {
  //find method
  res.render("DashBoard");
});