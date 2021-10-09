const { User } = require('../models');

 const userInfo = [
  {
    "userName": "Sal",
    "password": "password12345"
  },
  {
    "userName": "Lernantino",
    "password": "password12345"
  },
  {
    "userName": "Amiko",
    "password": "password12345"
  },
  {
    "userName": "Jordan",
    "password": "password12345"
  },
  {
    "userName": "Blake",
    "password": "password12345"
  }
];


const UserSeed = () => User.bulkCreate(userInfo);

module.exports = UserSeed;