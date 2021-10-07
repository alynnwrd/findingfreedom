const router = require('express').Router();

//home route file

const homeRoutes = require('./homeroute');


//the root route.
router.use('/', homeRoutes);





module.exports = router;