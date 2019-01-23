const express = require('express');
const router = express.Router();
const Coffees = require('../models/coffees');


router.get('/', (req, res) => {
    Coffees.find({}, (err, allCoffees) => {
        if (err) {
            console.log(err);
        } else {
            console.log(allCoffees);
            res.render('../views/coffees/index.ejs', {
                coffees: allCoffees
            });
        }
    });
});

router.get('/new', (req, res) => {
    res.render('../views/coffees/new.ejs');
});

router.post('/', (req, res) => {
    Coffees.create(req.body, (err, createdCoffee) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

router.get('/:id', (req, res) => {
    Coffees.findById(req.params.id, (err, foundCoffee) => {
        if (err) {
            console.log(err);
        } else {
            res.render('../views/coffees/show.ejs', {
                coffee: foundCoffee
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