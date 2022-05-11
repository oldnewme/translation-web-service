const Dao = require('../integration/dao');
class Controller {

    constructor(){
        this.dao = new Dao();
    }

    async createController(){
        console.log('tables created')
        await this.dao.createTables();
    }

    async setTranslation(language_id, key, translation){
        try {
            return await this.dao.setTranslation(language_id, key, translation);
        } catch (error) {
            throw error;
        }
    }

    async getTranslation(language_id, key){
        try{
            return await this.dao.getTranslation(language_id, key)
        }
        catch(error){
            throw error;
        }
    }

}

const controller = new Controller();
controller.createController();
module.exports = controller;