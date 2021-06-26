const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const locationRoutes = require('./Locationroutes')

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
