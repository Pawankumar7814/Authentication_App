const mongoose = require('mongoose');
const config = require('./config.json');


mongoose.connect(config.databaseURI, { useNewUrlParser: true, useUnifiedTopology: true });

const Connectdb = mongoose.connection;

module.exports = Connectdb;