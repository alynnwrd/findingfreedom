const { Header } = require('../models');

 const headerInfo = [
  {
    firstName: "Sal",
    lastName: "Ahmed",
    address: "784 Walnut St",
    city: "Duluth",
    state: "Minnesota",
    zipCode: "44189",
    phone: "651-498-9699",
    email: "sal@hotmail.com"
  },
  {
    firstName: "Zak",
    lastName: "Mohamed",
    address: "100  St",
    city: "Duluth",
    state: "Minnesota",
    zipCode: "44100",
    phone: "612-498-1000",
    email: "za@hotmail.com"
  }
];

const headerSeed = () => Header.bulkCreate(headerInfo);

module.exports = headerSeed;
