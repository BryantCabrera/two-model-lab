const express = require('express');
const router = express.Router();
const Cities = require('../models/cities');

router.get('/', (req, res) => {
    Cities.find({}, (err, allCities) => {
        if (err) {
            console.log(err);
        } else {
            console.log(allCities);
            res.render('../views/cities/index.ejs');
        }
    });
});

module.exports = router;