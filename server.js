const express = require('express');
const app = express();
require('./db/db.js');
const Cities = require('./models/cities');
const citiesRouter = require('./routers/cities');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/cities', citiesRouter);

app.get('/', (req, res) => {
    res.render('../views/home.ejs');
});


app.listen(8000, () => {
    console.log('Server listening on port 8000.');
});