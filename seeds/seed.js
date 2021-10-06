const sequelize = require('../config/connection');
const { Header } = require('../models');
const { User } = require('../models');

const userData = require('./userData.json');


const headerInfo = require('./header.json');

const fakeSeed = async () => {
  await sequelize.sync({ force: true });

  await Header.bulkCreate(headerInfo, {
    individualHooks: true,
    returning: true,
  });

  process.exit(2);
};

fakeSeed();

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();