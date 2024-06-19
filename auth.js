const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: "37321790780-v67g3bkti0jl2vg974kh6j80lrno00gq.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/google/callback",
  passReqToCallback: true,
},
(accessToken, refreshToken, profile, cb) => {
  // Store user data in the session
  req.session.user = {
    email: profile.emails[0].value,
    name: profile.displayName
  };
  cb(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});