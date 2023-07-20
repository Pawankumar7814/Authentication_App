// Import models and modules
const User = require("../model/user");
const mongoose = require("mongoose");
// const fast2sms = require('fast-two-sms');
// const unirest = require('unirest');
// require('dotenv').config();

// Controller for sign in page
module.exports.signin = function(req, res) {
    return res.status(200).render("users/signin", { title: " Sign In" });
};

// Controller for create session (Login the user)
module.exports.createSession = function(req, res) {
    return res.render("mainpages/home", { title: "Home" });
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
    return res.status(200).render("users/profile", {
        title: "Profile"
            // user: locals.user
    });
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

// fast2sms api = lqgcnxTbRjB0V82fwYkots1OQ5CUGaJM3XWmHhSpurLN6KPZyIYGpAbsTtx8DugKkVh29H1z3MZXRwjF
// module.exports.sendOTP = async function(req, res) {
//     console.log("aaaaaaaaaaaaaaaaaa")
//     const mobile_number = req.params.mobile_number;
//     console.log("2222222222222222", mobile_number)
//     const otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
//     console.log("3333333333333333", otp);
//     var reqs = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");
//     // console.log(`API KEY ${process.env.SMS_API_KEY}`);
//     // var options = {
//     //     // authorization: '',
//     //     // authorization: process.env.SMS_API_KEY,
//     //     // message: `Your otp is for Authentication App ${otp}`,
//     //     // numbers: [mobile_number]

//     //     "authorization": process.env.SMS_API_KEY,
//     //     "variables_values": otp,
//     //     "route": "otp",
//     //     // "message": `Your otp is for Authentication App ${otp}`,
//     //     "numbers": ["8287288298"]
//     // }

//     reqs.query({
//         "authorization": process.env.SMS_API_KEY,
//         "variables_values": "5599",
//         "route": "otp",
//         "numbers": "9210664161"
//     });

//     reqs.headers({
//         "cache-control": "no-cache"
//     });

//     reqs.end(function(res) {
//         if (res.error) { console.log(res.error); }

//         console.log(res.body);
//     });
//     // console.log('55555555555555555555555', options);
//     // var output = await fast2sms.sendMessage(options);
//     // console.log('23e23123213', output);
//     // if (output) {
//     //     console.log('Message send successfully.');
//     // } else {
//     //     console.log('Error while sending sms');
//     //     console.log(output);
//     // }
// }

// module.exports.verifyMobile = function(req, res) {
//     return res.render('users/verifyMobile', { title: "Mobile Verification" });
// }