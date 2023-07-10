// Import models and modules
const User = require("../model/user");
const mongoose = require("mongoose");

// Controller for sign in page
module.exports.signin = function(req, res) {
    return res.status(200).render("users/signin", { title: " Sign In" });
};

// Controller for create session (Login the user)
module.exports.createSession = function(req, res) {
    return res.render("users/profile");
};

// Controller for sign up page
module.exports.signup = function(req, res) {
    return res.status(200).render("users/signup", { title: " Sign up" });
};

// Controller for create user
module.exports.createUser = async function(req, res) {
    var userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    try {
        var checkUser = await User.findOne({ email: userData.email }); // Check the user if it is already exist then the if condition will be false
        if (!checkUser) {
            if (userData.password == req.body.confirmPassword) {
                // Create user
                User.create({
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                });
                return res.status(200).render("users/signin", { title: "Sign In" });
            } else {
                console.log(`Password must be same`);
                return res.redirect("back");
            }
        }
        console.log('User already exist');
        return res.redirect("back");
    } catch (err) {
        console.log(`Error - ${err}`);
    }
};

// Controller for Profile page
module.exports.profile = function(req, res) {
    return res.status(200).render("users/profile");
};

// Controller for logout
module.exports.logout = function(req, res) {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect("/user/signin");
    });
};