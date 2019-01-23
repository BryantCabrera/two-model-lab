const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: String,
    population: Number,
    coffeeShops: Number
});

const City = mongoose.model('City', citySchema);

module.exports = City;