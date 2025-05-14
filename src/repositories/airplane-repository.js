// const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models/index');

class AirplaneRepository{

    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane repository");
            throw{error};
        }
    }
    // constructor() {
    //     super(Airplane);   // Using super keyword we can call the constructor of our parent class.
    // }
}

module.exports = AirplaneRepository;