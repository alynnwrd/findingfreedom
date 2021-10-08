const sequelize = require('../config/connection');
const { Header } = require('../models');
const { User } = require('../models');

const userData = require('./userData.json');


const headerInfo = require('./header.json');





seedDatabase();