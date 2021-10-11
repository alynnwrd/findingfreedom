const Header = require('./Header');
const Experience = require('./Experience');
const User = require('./User');
const Education = require('./Education')
const Skills = require('./skills')
//const bcrypt = require('bcrypt');

//create association

SELECT *
FROM Header,
LEFT JOIN User ON Header.id=User.id;

SELECT *
FROM Experience,
LEFT JOIN User ON Experience.id=User.id;

SELECT *
FROM Education,
LEFT JOIN User ON Education.id=User.id;

SELECT *
FROM Skills,
LEFT JOIN User ON Skills.id=User.id

module.exports = { Header, User, Experience, Education};
