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
      console.error('Failed to get hikes from database: ', err);
      res.sendStatus(500);
    });

});

hikes.patch('/hikes', (req, res) => {

  const { description, rating } = req.body.hike;

  // update selected hike rating in database
  Hike.update(
      { rating },
      {
        where: {
          description
        },
      },
    )
    .then(() => {
      res.sendStatus(202);
    })
    .catch((err) => {
      console.error('Failed to update hike rating: ', err);
      res.sendStatus(500);
    });
});

hikes.delete('/hikes', (req, res) => {

  const { description } = req.body.hike;

  // delete a hike from the database
  Hike.destroy({
    where: {
      description,
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Failed to delete a hike: ', err);
      res.sendStatus(500);
    });
});

module.exports = hikes;
