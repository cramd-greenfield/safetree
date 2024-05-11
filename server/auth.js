const { Router } = require('express');
const db = require('./database');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const Auth = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env['GOOGLE_CLIENT_ID'],
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
      callbackURL: '/oauth2/redirect/google',
      scope: ['profile'],
    },
    function verify(issuer, profile, cb) {
      db.get(
        'SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?',
        [issuer, profile.id],
        (err, row) => {
          if (err) {
            return cb(err);
          }
          if (!row) {
            db.run(
              'INSERT INTO users (name) VALUES (?)',
              [profile.displayName],
              (err) => {
                if (err) {
                  return cb(err);
                }

                var id = this.lastID;
                db.run(
                  'INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)',
                  [id, issuer, profile.id],
                  (err) => {
                    if (err) {
                      return cb(err);
                    }
                    var user = {
                      id: id,
                      name: profile.displayName,
                    };
                    return cb(null, user);
                  }
                );
              }
            );
          } else {
            db.get(
              'SELECT * FROM users WHERE id = ?',
              [row.user_id],
              (err, row) => {
                if (err) {
                  return cb(err);
                }
                if (!row) {
                  return cb(null, false);
                }
                return cb(null, row);
              }
            );
          }
        }
      );
    }
  )
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

Auth.get('/login', (req, res) => {
  res.render('login');
});

Auth.get('/login/federated/google', passport.authenticate('google'));

Auth.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

/**************** LOGOUT *******************/
Auth.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

/************************************************/
module.exports = Auth;
/************************************************/
