// Import modules
const express = require('express');
const mongoose = require('mongoose');
const Connectdb = require('./config/mongoose');

const app = express(); // Creating an express application
const port = 3000; //Setting up the port number

app.use(express.urlencoded());

app.set("view engine", "ejs"); // Setting up the view engine
app.set("views", "./views"); // Route to ejs files 
app.use(express.static('./assets'));

// Routes
app.use("/", require("./routes"));

app.listen(port, function(err) {
    if (err) {
        console.log(`Server is not started yet because of ${err}`);
    }
    console.log(`Server is running on ${port}`);
});