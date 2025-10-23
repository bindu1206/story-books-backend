var GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
        //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return done(err, user);
        //   });
      }
    )
  );

  passport.serializeUser((user, cb) => cb(null, user.id));

  passport.deserializeUser((user, cb) => {
    User.findById(id, (err, user) => cb(err, user));
  });
};

//User clicks Login with Google → Google asks user to log in and approve the app → after approval Google sends an authorization code to the app → the app sends that code back to Google to ask for an access token → Google verifies and sends back the access token → using that access token the app can access the user's Google data.
