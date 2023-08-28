const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// form posts results to json file
app.post('/form-action', (req, res, next) => {
    fs.appendFileSync('formLog.json', `${req.body.name}\n`)
    res.send(`Thank you for submitting form.`);
    next();
});

app.get('/formsubmissions', (req, res, next) => {
    try {
        const data = fs.readFileSync('formLog.json', 'utf8');
        console.log(data);
        res.send(data);
    } catch (err) {
        console.log(err);
    }
    next();
});

// middleware console logs urla
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

// give express access to all files in public directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
    res.send('Hello from the server side...');
});

app.listen(3000);