const passport = require('passport');
var GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const User = require("../model/user");

function generatePassword() {
    var chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}

passport.use(
    new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/user/auth/google/callback",
        },
        async function(accessToken, refreshToken, profile, cb) {
            // console.log(profile);
            try {
                let user = await User.findOne({ email: profile.emails[0].value });
                if (user) {
                    return cb(null, user);
                }
                user = await User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: generatePassword(),
                });
                return cb(null, user);
            } catch (err) {
                console.log("Error: ", err);
                return cb(err, null);
            }
        }
    )
);


module.exports = passport;
// name: profile.displayName,
// email: profile.emails[0].value,
// password: generatePassword(),