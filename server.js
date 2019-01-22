const express = require('express');
const app = express();
require('./db/db.js');
const Cities = require('./models/cities');

app.get('/', (req, res) => {
    Cities.find({}, (err, allCities) => {
        if (err) {
            console.log(err);
        } else {
            console.log(allCities);
            res.render('../views/cities/index.ejs');
        }
    });
});


app.listen(8000, () => {
    console.log('Server listening on port 8000.');
});