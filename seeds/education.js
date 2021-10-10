const { Education } = require("../models");

const schoolInfo = [
  {
    schoolName: "Stanford University",
    location: "California",
    degree: "Dev",
    startDate: "01/10/2021",
    graduateData: "05/01/23",
  },
  {
    schoolName: "Harvard University",
    location: "Massachusetts",
    degree: "Engineer",
    startDate: "01/10/2021",
    graduateData: "05/01/23",
  },
];

const educationSeed = () => Education.bulkCreate(schoolInfo);

module.exports = educationSeed;
