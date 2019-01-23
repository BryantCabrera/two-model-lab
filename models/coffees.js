const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: String,
    roast: String,
    region: String
});

const Coffee = mongoose.model('Coffee', coffeeSchema);


module.exports = Coffee;