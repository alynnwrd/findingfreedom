const { Experience } = require('../models');

 const employerInfo = [
  {
    jobTitle: "Developer",
    employer: "Abbot",
    city: "Saint Paul",
    state: "MN",
    startDate: "01/01/2019",
    endDate: "01/01/2022",
  },
  {
    jobTitle: "SOC",
    employer: "Abbot",
    city: "Saint Paul",
    state: "MN",
    startDate: "01/01/2015",
    endDate: "01/01/2022",
  }
];

const experienceSeed = () => Experience.bulkCreate(employerInfo);

module.exports = experienceSeed;