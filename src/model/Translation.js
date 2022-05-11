const Sequelize = require('sequelize');

class Translation extends Sequelize.Model {
    static get TRANSLATION_MODEL_NAME() {
        return 'translation';
    }

    static createModel(sequelize) {
        Translation.init(
            {
                language_id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                key: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                translation: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

            },
            {sequelize, modelName: Translation.TRANSLATION_MODEL_NAME, paranoid: false}
        );
        return Translation;
    }
}

module.exports = Translation;
