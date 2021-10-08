const router = require('express').Router();

//
const headerInfo = require('./header');

//
router.use('/header', headerInfo);

module.exports = router;