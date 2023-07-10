// Import modules, Controller and models
const express = require('express');
const homeController = require('../controllers/home_Controller');

const router = express.Router(); // Using express's router

// Route to home page
router.get('/', homeController.home);


// Route to user pages
router.use("/user", require("./user.js"));

module.exports = router;