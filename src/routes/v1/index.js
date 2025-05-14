const express = require('express');

const { FlightMiddlewares} = require('../../middlewares/index');
const {InfoController} = require('../../controllers');
const {FlightController} = require('../../controllers/flight-controller');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const flightRoutes = require('./flight-router');
const router = express.Router();
router.use('/cities', cityRoutes);


router.use('/airplanes',airplaneRoutes);
router.use('/flights',flightRoutes);

router.get('/info',InfoController.info);
router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
)
router.get('/flights',FlightController.getAll);
// router.post('/flights',FlightController.create)

module.exports = router; 