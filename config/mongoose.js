const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DatabaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', function() {
    console.log('The database is connected successfully');
})

const Connectdb = mongoose.connection;

module.exports = Connectdb;