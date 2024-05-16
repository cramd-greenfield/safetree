const express = require('express');
const hikes = express.Router();
const { Hike } = require('../database');

// routes for hike related requests

hikes.post('/hikes', (req, res) => {

  const { description, location, rating } = req.body.hike;

  // add hike to the database
  Hike.create({ description, location, rating })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Failed to add favorite hike: ', err);
      res.sendStatus(500);
    });

});

hikes.get('/hikes', (req, res) => {

  // find all hikes in database
  Hike.findAll()
    .then((hikes) => {
      res.status(200).send(hikes);
    })
    .catch((err) => {
      console.error('Failed to get favorite hikes from database: ', err);
      res.sendStatus(500);
    });

});

hikes.patch('/hikes', (req, res) => {
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

hikes.delete('/hikes', (req, res) => {
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

module.exports = hikes;
