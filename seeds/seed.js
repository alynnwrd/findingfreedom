const sequelize = require("../config/connection");
const { Header } = require("../models");
const { User } = require("../models");
const { Experience }  = require("../models");
const { Education }  = require("../models");
const { Skills} = require('../models');

const userData = require("./userData");
const headerData = require("./header");
const experienceData = require("./experience");
const educationData = require('./education')
const skillData = require('./skill')

const resumeSeed = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await userData();
  console.log("\n--- USER SEEDED ---\n");

  await headerData();
  console.log("\n--- HEADER PART SEEDED ---\n");

  await experienceData();
  console.log("\n--- EXPERIENCE PART SEEDED ---\n");

  await educationData();
  console.log("\n--- EDUCATION PART SEEDED ---\n");

  await skillData ();
  console.log("\n--- Skill PART SEEDED ---\n");


  process.exit(0);
};

resumeSeed();
