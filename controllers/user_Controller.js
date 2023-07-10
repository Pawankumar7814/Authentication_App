// Import models and modules
const User = require('../model/user');
const mongoose = require('mongoose');

// Controller for sign in page
module.exports.signin = function(req, res) {
    return res.status(200).render('users/signin', { title: " Sign In" });
}

// Controller for sign up page
module.exports.signup = function(req, res) {
    return res.status(200).render('users/signup', { title: " Sign up" });
}

// Controller for create user
module.exports.createUser = function(req, res) {
    try {
        var userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        if (userData.password == req.body.confirmPassword) {
            // Create user
            User.create({
                name: userData.name,
                email: userData.email,
                password: userData.password
            });
            return res.status(200).render('users/signin', { title: "Sign In" });
        } else {
            console.log(`Password must be same`);
            return res.redirect('back');
        }
    } catch (err) {
        console.log(`Error - ${err}`);
    }
}

// Controller for Profile page
module.exports.profile = function(req, res) {
    return res.status(200).render('users/profile');
}