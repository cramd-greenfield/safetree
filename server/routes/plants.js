const { Router } = require('express');
const { searchPlants, loadPlants } = require('../helpers/plantHelpers.js');
const { Plant } = require('../database/index.js');

const Plants = Router();

// makes search to api
Plants.get('/plants', (req, res) => {
  // make req to api
  loadPlants()
    .then(({ data }) => {
      console.log(data.data.length);
      res.status(201).send(data.data);
    })
    .catch((err) => {
      console.error('failed to load plants', err);
      res.sendStatus(500);
    });
});

Plants.post('/plants', (req, res) => {
  // access search value from body
  const { plantName } = req.body;
  console.log(plantName);
  // make req to api
  searchPlants(plantName)
    .then(({ data }) => {
      console.log(data);
      res.status(201).send(data.data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

Plants.get('/plants', (req, res) => {});

Plants.delete('/plants', (req, res) => {});

module.exports = Plants;
