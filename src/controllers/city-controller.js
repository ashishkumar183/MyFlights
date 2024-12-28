const CityService = require('../services/city-service');

class CityController {
    async createCity(req, res) {
        try {
            const city = await CityService.createCity({
                name: req.body.name
            });
            return res.status(201).json({
                data: city,
                success: true,
                message: 'Successfully created a city',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to create a city',
                err: error
            });
        }
    }

    async destroyCity(req, res) {
        try {
            const response = await CityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully deleted a city',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to delete a city',
                err: error
            });
        }
    }

    async getCity(req, res) {
        try {
            const response = await CityService.getCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully fetched a city',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to get a city',
                err: error
            });
        }
    }

    async updateCity(req, res) {
        try {
            const city = await CityService.updateCity(req.params.id, req.body);
            return res.status(200).json({ 
                data: city,
                success: true,
                message: 'Successfully updated a city',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to update a city',
                err: error
            });
        }
    }

    async getAll(req, res) {
        try {
            const cities = await CityService.getAllCities();
            return res.status(200).json({ 
                data: cities,
                success: true,
                message: 'Successfully fetched all cities',
                err: {}
            });
        } catch (error) {
            console.log("Error in controller layer:", error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to fetch the cities',
                err: error
            });
        }
    }

}

module.exports = new CityController();