const express = require('express');
const controller = require('../controller/Controller');

const PORT = 8080;
let server = express();

// middleware
server.use(express.json());

// routes
server.get('/translation/:language_id/:key', async (req, res) => {
    const {language_id, key} = req.params;
    let translation = await controller.getTranslation(language_id, key);
    console.log(translation);
    if (translation) {
        return res.status(200).json(translation);
    }
    res.status(400).json('No translation was found');
})

server.post('/translation', async (req, res) => {

    const {language_id, key, translation} = req.body;
    if(!(language_id && key && translation)){
        return res.status(400).json('Please supply language_id, key and translation')
    }
    const translationToAdd = {
        language_id: language_id,
        key: key,
        translation: translation
    };
    await controller.setTranslation(language_id, key, translation);
    res.status(200).json(translationToAdd);
});

// start server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

// 404 errors
server.use((req, res, next) =>{
    const error = new Error('resource not found');
    error.status = 404;
    next(error);
});

// other errors
server.use((error, req, res) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});
