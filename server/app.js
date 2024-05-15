const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const routes = require('./routes');
// do we need morgan???

const distPath = path.resolve(__dirname, '../dist');

const app = express();

app.use(
  session({
    secret: 'shush',
    resave: false,
    saveUninitialized: true, //automatically saves when using express-session & Passport
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));
// app.use(cookieParser()); Do we need?

// app.use('/', routes); // Links the routes to app.js

app.listen(3000, () => {
  console.log(`
    Check it out: http://127.0.0.1:3000
  `);
});

app.get('/v1/animals?name=', (req, res) => {

  Animal.findAll({
    attributes: ['species', 'isPredator', 'location']
  })
  .then((response) => {

  })
  .catch((response) => {
    console.error('Error present! ', response);
  })

})

module.exports = {
  app,
};
