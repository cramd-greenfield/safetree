const express = require('express');
const router = express.Router();
const { Hike } = require('../database');

// in app.js, there will be something like app.use('/', routerIndex),
// and then in server/routes/index.js, router.use('/hikes', hikes);
// so all requests starting with /hikes will come here, and these
// endpoints will handle requests to endpoints '/hikes/*'

// routes for hike related requests

router.post('/favs', (req, res) => {
  // add a fav hike to the db

  // use Hike sequelize model.create() to add to table
  Hike.create(/* insert object goes here */)
    .then((data) => {
      console.log('Added favorite hike: ', data);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Failed to add favorite hike: ', err);
      res.sendStatus(500);
    });
});

router.get('/favs', (req, res) => {
  // respond with all the fav hikes in db

  // use Hike sequelize model.findAll() in hikes table
  Hike.findAll()
    .then((data) => {
      console.log('fetched all hikes: ', data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('Failed to get favorite hikes from database: ', err);
      res.sendStatus(500);
    });
});

router.get('/favs', (req, res) => {
  // update certain fav hike rating in db

  // use Hike sequelize model.update() to update rating
  Hike.update()
    .then((data) => {
      console.log('updated hike rating, response data: ', data);
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error('Failed to update hike rating: ', err);
      res.sendStatus(500);
    });
});

router.delete('/favs', (req, res) => {
  // delete a fav hike from the db

  // use Hike sequelize model.destory() to delete fav hike from table
  Hike.destroy()
    .then((data) => {
      console.log('deleted user, response data: ', data);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Failed to delete a favorite hike: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
