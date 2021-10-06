//express package
const express = require('express');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
//const hbs = exphbs.create({ helpers});

// Inform Express.js which template engine we're using
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

//static and json and public folder path.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {console.log ( `THIS IS WORKING `)} );