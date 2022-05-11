const express = require('express');
const DB = require('./database');

const PORT = 8080;
let server = express();
server.use(express.json())

server.get('/translation/:language_id/:key', (req, res) => {

})

server.post('/translation', (req, res) => {

    const {language_id, key, translation} = req.body;
    const translationToAdd = {
        language_id:language_id,
        key:key,
        translation:translation
    }

    DB.push(translationToAdd);

    res.json(translationToAdd);
    console.log(DB);
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});