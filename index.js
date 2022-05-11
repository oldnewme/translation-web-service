const express = require('express');

const PORT = 8080;
let server = express();
server.use(express.json())

server.get('/translation/:language_id/:key', (req, res) => {

})

server.post('/translation', (req, res) => {

})

server.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
});

server.get('/' , (req, res) => {
    res.send('Hellooooo');
})
