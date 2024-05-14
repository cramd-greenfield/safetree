const { Router } = require('express');
const observations = require('./observations');
const wildlife = require('./wildlife');
const plants = require('./plants');
const hikes = require('./hikes');
const user = require('./user');

const router = Router();

// Add all routes here

//homepage routes for feed
// router.route('/homepage').get(observations.feed);
// router.route('/homepage').patch(observations.reaction);

// Wildlife routes

// Plants routes

// Hikes routes

// user/profile routes

module.exports = {
  router,
};
