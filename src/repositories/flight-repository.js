const {Op} = require('sequelize')
const {Flights} = require('../models/index');


class FlightRepository {

    #createFilter(data){ //  # is used to create private class.
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        }
    }

    async createFlight(data){
        console.log("Inside flight repo");
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Error in flight-repository layer:", error);
            throw error; 
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Error in flight-repository layer:", error);
            throw error; 
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll();
            return flight;
        } catch (error) {
            console.log("Error in flight-repository layer:", error);
            throw error; 
        }
    }
}

module.exports = FlightRepository;