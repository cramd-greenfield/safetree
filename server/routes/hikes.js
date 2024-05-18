const express = require('express');
const axios = require('axios');
const hikes = express.Router();
const { Hike } = require('../database');
const { GOOGLE_MAPS_API_KEY } = process.env;

// routes for hike related requests

hikes.post('/hikeSearch', (req, res) => {

  const { location } = req.body.search;

  axios({
    method: 'post',
    url: 'https://places.googleapis.com/v1/places:searchText',
    params: {
      key: GOOGLE_MAPS_API_KEY,
      fields: 'places.id,places.displayName,places.location,places.primaryTypeDisplayName,places.rating,places.formattedAddress',
      textQuery: `hikes near ${location}`,
      maxResultCount: 5,
      rankPreference: 'DISTANCE',
    }
  })
    .then(({ data }) => {
      // console.log('data from google: ', data);
      // map data.places to object I want
      let relevantHikeProps = data.places.map((result) => {
        return {
          description: result.displayName.text,
          location: result.formattedAddress,
          rating: result.rating,
        }
      })
      // console.log('relevantHIkeProps', relevantHikeProps);
      res.status(201).send(relevantHikeProps);
    })
    .catch((err) => {
      console.error('Failed to fetch results from Google Maps', err);
      res.sendStatus(500);
    })

});

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

  const { description } = req.body;

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
