// Import modules, Controller and models
const express = require('express');
const userController = require('../controllers/user_Controller');

const router = express.Router(); // Using express's router

// Route to signin page
router.use('/signin', userController.signin);

module.exports = router;