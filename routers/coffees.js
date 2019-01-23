const express = require('express');
const router = express.Router();
const Cities = require('../models/coffees');

router.get('/', (req, res) => {
    Coffees.find({}, (err, allCoffees) => {
        if (err) {
            console.log(err);
        } else {
            console.log(allCoffees);
            res.render('../views/coffees/index.ejs', {
                coffee: allCoffees
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

router.put('/:id', (req, res) => {
    Cities.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, foundCity) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/cities');
        }
    });
});

module.exports = router;