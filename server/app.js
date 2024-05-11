// load dependencies
const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');

// initialize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// configure express
const app = express();
app.use(
  session({
    secret: 'keyboard cat',
    resave: false, //per the express-session docs this should be set to false
    store: new SequelizeStore({
      db: 'sessions.db',
    }),
    proxy: true, // if you do SSL outside of node.
  })
);
