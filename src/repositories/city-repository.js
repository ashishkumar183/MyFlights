// The role of repository is to interact with database.
const {Op} = require('sequelize')
const { City } = require('../models/index');

class CityRepository {
    async createCity({ name , id}) {  // By using {name} we can directly access the name object . We don't need to do obj.name.
        try {
            const city = await City.create({ 
                id: id ,
                name: name
            }); 
            return city;
        } catch (error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error){
            console.log("Error in repository layer:", error);
            throw error;
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where: {
                    id: cityId
                }
            });
            return city;
        } catch(error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }

    async getAllCities(filter){ // Filter can be empty also
        try{
            if(filter.name){       // By doing this we can get the list of cities starting from d , de , del etc.
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch(error) {
            console.log("Error in repository layer:", error);
            throw error;
        }
    }
}

module.exports = CityRepository;