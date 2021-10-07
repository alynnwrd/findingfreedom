const router = require('express').Router();

<<<<<<< HEAD
//home route file

const homeRoutes = require('./homeroute');


//the root route.
router.use('/', homeRoutes);





module.exports = router;
=======
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> 18a84bb1a48a34659879eb75bf45ec171c77ef06
