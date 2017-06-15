const port = 3000;

const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log('error : ', err);
    } 
    console.log('Connected to Server on port', port);
})
