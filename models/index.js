const Header = require('./Header');
const Experience = require('./Experience');
const User = require('./User');
const Education = require('./Education');
const Skills = require('./Skills');
//const bcrypt = require('bcrypt');

//create association
/*SELECT *
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


// Initialize App
const app = express();

// Assign route
app.use('/', (req, res, next) => {
    res.render('resume.pug', {Header, Experience, Education, Skills});
});

// Start server
app.listen(3306, () => {
    console.log('App listening on port 3306');
});*/

module.exports = { Header, User, Experience, Education, Skills};
