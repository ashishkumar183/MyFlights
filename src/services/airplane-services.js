const { AirplaneRepository } = require('../repositories');

async function createAirplane(data) {
    try {
        console.log("in airplane-services");
        const airplane = await AirplaneRepository.create(data);
        return airplane;
    } catch(error) {
        console.log("Error in airplane-service layer:", error);
        throw error;
    }
}

module.exports = {
    createAirplane
};