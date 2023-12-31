// Import modules
const express = require('express');
const mongoose = require('mongoose');
require('./config/mongoose');
require('dotenv').config;
const passport = require('passport');
require('./config/passport-local-strategy'); // It will run directly
require('./config/passport-google-oauth20-strategy');
const expressSession = require('express-session');
const mongoStore = require('connect-mongo');

const app = express(); // Creating an express application
const port = 3000; //Setting up the port number

app.use(express.urlencoded({ extended: false })); // To read the req.body

app.use(expressSession({
    name: 'UserData',
    secret: 'userData',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (24 * 60 * 60 * 1000)
    },
    store: mongoStore.create({
        mongoUrl: process.env.DatabaseURI
    })
}));

app.use(passport.initialize()); // Using the passport library
app.use(passport.session()); // It uses the express-session library
app.use(passport.setAuthenticatedUser); // Global Middleware


app.set("view engine", "ejs"); // Setting up the view engine
app.set("views", "./views"); // Route to ejs files 
app.use(express.static('./assets')); // To access the 

// Routes
app.use("/", require("./routes"));

app.listen(port, function(err) {
    if (err) {
        console.log(`Server is not started yet because of ${err}`);
    }
    console.log(`Server is running on ${port}`);
});