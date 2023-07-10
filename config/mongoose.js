const mongoose = require('mongoose');
const config = require('./config.json');


mongoose.connect(config.databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', function() {
    console.log('The database is connected successfully');
})

const Connectdb = mongoose.connection;

module.exports = Connectdb;