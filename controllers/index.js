const router = require('express').Router();

//home route file
const homeRoutes = require('./homeroute');
//the root route.
router.use('/', homeRoutes);

//api route
const apiRoutes = require('./api');

//api route
router.use('/api', apiRoutes);





module.exports = router;
