const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/citycoffee';

mongoose.connect(connectionString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});

mongoose.connection.on('connect', () => {
    console.log(`mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`mongoose error ${error}`);
});

mongoose.connection.on('disconnect', () => {
    console.log(`mongoose disconnected to ${connectionString}`);
});