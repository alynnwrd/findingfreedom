const router = require("express").Router();

//require education, experience, header.
const educationInfo = require("./education");
const experienceInfo = require("./experience");
const headerInfo = require("./header");

//routes!
//education,
router.use("/education", educationInfo);
//experience
router.use("/experience", experienceInfo);
//header
router.use("/header", headerInfo);

module.exports = router;
