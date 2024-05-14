const { app } = require('./app.js');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('./database');

require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const authorized = (accessToken, refreshToken, profile) => {
  console.log('test', test);
  User.findOrCreate(
    { googleId: profile.id },
    { googleId: profile.id, username: 'username' }
  )
    .then(([user]) => {
      console.log('user', user);
      return user;
    })
    .catch((err) => {
      console.error('Failed to find or create user:', err);
    });
};

// Allow requests
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    authorized
  )
);

// Consent Screen
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

// Success/Fail login attempt
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/login',
  })
);
// Save state for session
app.use(passport.session());

// Or connect.session()??
app.use(
  session({
    secret: 'shush',
    resave: false,
    saveUninitialized: true, //automatically saves when using express-session & Passport
  })
);

passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

/**************** LOGOUT *******************/
app.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = {
  app,
};
