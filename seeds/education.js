const { Education } = require('../models');

 const schoolInfo = [
  {
    schoolName: "Stanford University",
    location: "California",
    degree: "Dev",
    graduateData: "05/01/23",
 
  },
  {
    schoolName: "Harvard University",
    location: "Massachusetts",
    degree: "Engineer",
    graduateData: "05/01/23",
 
  },
];

const educationSeed = () => Education.bulkCreate(schoolInfo);

module.exports = educationSeed;