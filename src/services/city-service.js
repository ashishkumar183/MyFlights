const CityRepository = require('../repositories/city-repository'); // Fixed import
const cityRepository = new CityRepository(); // Create instance

class CityService {


    async createCity(data) {
        try {
            const city = await cityRepository.createCity(data);
            return city;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await cityRepository.deleteCity(cityId);
            return response;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }

    async updateCity(cityId , data) {
        try {
            const city = await cityRepository.updateCity(cityId , data);
            return city;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }

    async getCity(cityId) {
        try {
            const city = await cityRepository.getCity(cityId);
            return city;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }

    async getAllCities() {
        try {
            const cities = await cityRepository.getAllCities();
            return cities;
        } catch(error) {
            console.log("Error in service layer:", error);
            throw error;
        }
    }

}

module.exports = new CityService();