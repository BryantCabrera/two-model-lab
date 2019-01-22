const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: String,
    population: Number,
    coffeeShops: Number,
    hipster: Boolean
});

const City = mongoose.model('City', citySchema);

module.exports = City;