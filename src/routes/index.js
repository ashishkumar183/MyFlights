const express = require('express');

const v1Routes = require('./v1');
const cityRoutes = require('./v1/city-routes');
const flightRoutes = require('./v1/flight-router');

const router = express.Router();

router.use('/v1',v1Routes);
router.use('/v1/cities', cityRoutes);
router.use('/v1/flights',flightRoutes);

module.exports = router;