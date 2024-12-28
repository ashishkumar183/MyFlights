const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

// Create a city
router.post('/', CityController.createCity);
// Get all cities.
router.get('/', CityController.getAll);
// Get a city by name
router.get('/:id', CityController.getCity);
// Update a city
router.patch('/:id', CityController.updateCity);
// Delete a city
router.delete('/:id', CityController.destroyCity);

module.exports = router;