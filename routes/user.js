// Import modules, Controller and models
const express = require("express");
const userController = require("../controllers/user_Controller");
const passport = require('passport');

const router = express.Router(); // Using express's router

// Route to signin page
{
    router.use("/signin", userController.signin);
    router.post("/createSession", passport.authenticate('local', { failureRedirect: '/users/signin', }), userController.createSession);
}

// Route to signup
{
    router.use("/signup", userController.signup);
    router.post('/createUser', userController.createUser);
}

// Route to profile page
router.use("/profile", passport.checkAuthentication, userController.profile);

// Route to logout
router.get('/logout', userController.logout);

module.exports = router;