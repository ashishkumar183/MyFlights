// We will write all the actual queries in the repository (raw query , custom query , join)
const { Logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            console.log("In repo");
            const response = await this.model.create(data);
            console.log("inside crud-repository");
            return response;
        }catch(error){
            console.log("Something went wrong in crud repo");
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
        }
    }

    async destroy(data){
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : destroy');
            throw error;
        }
    }

    async get(data){
        try{
            const response = await this.model.findByPk(data);
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }

    async getAll(data){
        try{
            const response = await this.model.findAll();
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }

    async update(id ,data){  // data -> {col: value , ....} here data is a object .
        try{
            const response = await this.model.update(data,{
                where: {
                    id:id
                }
            });
            return response;
        }catch(error){
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }
}

module.exports = CrudRepository;