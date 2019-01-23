const express = require('express');
const router = express.Router();
const Cities = require('../models/cities');

router.get('/', (req, res) => {
    Cities.find({}, (err, allCities) => {
        if (err) {
            console.log(err);
        } else {
            console.log(allCities);
            res.render('../views/cities/index.ejs', {
                cities: allCities
            });
        }
    });
});


router.get('/new', (req, res) => {
    res.render('../views/cities/new.ejs')
});

router.post('/', (req, res) => {
    Cities.create(req.body, (err, createdCity) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;