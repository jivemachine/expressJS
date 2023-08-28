const express = require('express');
const path = require('path');

let app = express();

app.get('/', (req, res, next) => {
    res.send('Hello from the server side...');
});

app.listen(3000);