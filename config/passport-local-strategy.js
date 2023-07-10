// import modules
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/user");

passport.use(
    new LocalStrategy({
            usernameField: "email",
        },
        async function(email, password, done) {
            try {
                const user = await User.findOne({ email: email });
                if (!user) {
                    console.log("User not found");
                    return done(null, false);
                }
                if (password != user.password) {
                    console.log("Incorrect Password");
                    return done(null, false);
                }
                return done(null, user);
            } catch (err) {
                console.log("Error in passport local strategy: ", err);
                return done(err);
            }
        }
    )
);


// When req go to the server then this function is used
passport.serializeUser(function(user, done) {
    done(null, user.email);
});

// When res come back to the user then this function is used
passport.deserializeUser(function(email, done) {
    User.findOne({ email: email })
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            console.log(`Error in Deserialize user ${err}`);
            done(err);
        });
});


// To check the authentication if user is logged in then it will allow to go other page else not
passport.checkAuthentication = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/users/signin');
    }
}

// TO save the data of user (Logged in user) {Global Middleware}
passport.setAuthenticatedUser = function(req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        return next();
    } else {
        return next();
    }
}

module.exports = passport;