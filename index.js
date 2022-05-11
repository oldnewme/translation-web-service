const express = require('express');
const DB = require('./database');

const PORT = 8080;
let server = express();

// middleware
server.use(express.json())

const findTranslation = (language_id, key, DB) => {
    let translatedString = '';
    DB.forEach(translation => {
        if (translation.language_id === language_id && translation.key === key) {
            translatedString = translation.translation;
        }
    });
    return translatedString;
}

// routes
server.get('/translation/:language_id/:key', (req, res) => {
    const {language_id, key} = req.params;
    let translation = findTranslation(language_id, key, DB);
    if(translation){
        return res.status(200).json(translation);
    }
    res.status(400).json('No translation was found');
})

server.post('/translation', (req, res) => {

    const {language_id, key, translation} = req.body;
    const translationToAdd = {
        language_id: language_id,
        key: key,
        translation: translation
    };

    DB.push(translationToAdd);

    res.json(translationToAdd);
    console.log(DB);
});

// start server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});