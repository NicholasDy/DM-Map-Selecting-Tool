const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const locationRoutes = require('./Locationroutes')
const cloudinaryRoutes = require('./Cloudinary')

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/cloudinary', cloudinaryRoutes);

module.exports = router;
