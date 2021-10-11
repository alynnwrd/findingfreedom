const { Skills } = require('../models');

 const skillsData= [
  {
    
    personalSkills: "multilingual",
    skillDescription: "somali, Kiswahili, Arabic, English",

  }
 ]

 const skillSeed = () => Skills.bulkCreate(skillsData);

module.exports = skillSeed;