const router = require("express").Router();

//require education, experience, header.
const educationInfo = require("./educationRoute");
const experienceInfo = require("./experienceRoute");
const headerInfo = require("./headerRoute");
const skillsInfo = require("./skillsRoute");
const users = require("./userRoutes");
//const dashBoardInfo = require('./dashboard');

//routes!
//education,
router.use("/education", educationInfo);
//experience
router.use("/experience", experienceInfo);
//header
router.use("/header", headerInfo);
//skills
router.use("/skills", skillsInfo);
//users
router.use("/users", users);


//router.use("/dashboard", dashBoardInfo);



module.exports = router;
