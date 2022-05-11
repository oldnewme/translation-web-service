const Translation = require('../model/Translation');

const Sequelize = require('sequelize');
const {where} = require("sequelize");

const DB_NAME = 'translation_db';
const USER_NAME = 'root';
const PASSWORD = '';
const HOST = '127.0.0.1'
const DIALECT = 'mysql';

class Dao {
    constructor() {
        this.database = new Sequelize(
            DB_NAME,
            USER_NAME,
            PASSWORD,
            {host: HOST, dialect: DIALECT,}
        );

        Translation.createModel(this.database);
    }

    async createTables() {
        await this.database.authenticate();
        await this.database.sync({force: false});
    }

    async getTranslation(language_id, key) {

        try {
            let foundTranslation = await Translation.findOne({where: {language_id: language_id, key: key}});
            let translationData = foundTranslation?.dataValues;
            if (translationData) {
                return translationData;

            }
        } catch (error) {
            throw error;
        }
    }

    async setTranslation(language_id, key, translation) {
        try {
            const createdTranslation = await Translation.create({
                language_id: language_id,
                key: key,
                translation: translation
            });
            return createdTranslation;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = Dao;