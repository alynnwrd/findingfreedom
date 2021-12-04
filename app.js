const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require('express-session');

//const sequelize = require("./config/connection");
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

var compression = require('compression')
  var compApp = express()
    compApp.use(compression)


const routes = require('./controllers');

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3007;

//const hbs = exphbs.create({ helpers });

//const sess = {
  //secret: 'Super secret secret',
  //cookie: {},
  //resave: false,
  //saveUninitialized: true,
  //store: new SequelizeStore({
//     db: sequelize
//   })
// };

//app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Create the Handlebars.js engine object with custom helper functions

// Inform Express.js which template engine we're using


//static and json and public folder path.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

//sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening to the server on port, ", PORT));
//});

//module.exports = sequelize;
