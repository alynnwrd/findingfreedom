const Header = require("./Header");
const Experience = require("./Experience");
const User = require("./User");
const Education = require("./Education");
const Skills = require("./Skills");
const bcrypt = require('bcrypt');
//header
/*User.hasMany(Header, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Header.belongsTo(User, {
  foreignKey: "user_id",
});

//education
User.hasMany(Education, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Education.belongsTo(User, {
  foreignKey: "user_id",
});

//experience
User.hasMany(Experience, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Experience.belongsTo(User, {
  foreignKey: "user_id",
});

//skills
User.hasMany(Skills, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Skills.belongsTo(User, {
  foreignKey: "user_id",
});*/

module.exports = { Header, User, Experience, Education, Skills };
