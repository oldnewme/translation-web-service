const express = require('express');

const PORT = 8080;
let server = express();

server.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
});

server.get('/' , (req, res) => {
    res.send('Hellooooo');
})
