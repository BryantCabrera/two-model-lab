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
    res.render('../views/cities/new.ejs');
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

router.get('/:id', (req, res) => {
    Cities.findById(req.params.id, (err, foundCity) => {
        if (err) {
            console.log(err);
        } else {
            res.render('../views/cities/show.ejs', {
                city: foundCity
            });
        }
    });
});

router.delete('/:id', (req, res) => {
    Cities.findByIdAndRemove(req.params.id, (err, deletedCity) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/cities');
        }
    });
});

router.get('/:id/edit', (req, res) => {
    Cities.findById(req.params.id, (err, foundCity) => {
        if(err) {
            console.log(err);
        } else {
            res.render('../views/cities/edit.ejs', {
                city: foundCity
            });
        }
    }); 
});

module.exports = router;