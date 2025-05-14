const {FlightRepository , AirplaneRepository} = require('../repositories/index');
const {compareTime} = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }        
            console.log("Inside flight service");
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeat: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-service layer");
            throw {error};
        }
    }

    async getFlightData(){
        // todo
    }
}

module.exports = FlightService;

// flightnumber , airplaneId , departureAirportId , arrivalAirportId , arrivalTime , departureTime , price , totalSeat(to be fetched from airplane).