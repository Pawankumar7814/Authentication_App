// Import modules, Controller and models
const express = require("express");
const userController = require("../controllers/user_Controller");
const passport = require('passport');

const router = express.Router(); // Using express's router

// Route to signin page
{
    router.get("/signin", userController.signin);
    router.post("/createSession", passport.authenticate('local', { failureRedirect: '/user/signin', }), userController.createSession);
}

// Route to signup
{
    router.get("/signup", userController.signup);
    router.post('/createUser', userController.createUser);
}

// Route to profile page
router.get("/profile/:id", passport.checkAuthentication, userController.profile);

// Mobile authentication
{
    // Route to verify mobile number
    // router.use('/verifyMobile', userController.verifyMobile);

    // Route to send otp
    // router.get('/sendOTP/:mobile_number', userController.sendOTP);
}

// Route to logout
router.get('/logout', userController.logout);

// Google authentication
{
    // This route is used to send the request to google
    router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // This is used to get the response from the google
    router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), userController.createSession);
}

module.exports = router;


// Code is copied from passportjs which is a part of callback route
// function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   }