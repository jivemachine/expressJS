const express = require('express');
const path = require('path');

let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello from the server side...');
});

// give express access to all files in public directory
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);