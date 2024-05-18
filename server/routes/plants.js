const { Router } = require('express');
const { searchPlants, loadPlants, savePlants } = require('../helpers/plantHelpers.js');
const { Plant } = require('../database/index.js');

const Plants = Router();

// makes search to api
Plants.get('/plants', (req, res) => {
  Plant.findAll({ limit: 5 })
    .then(data => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

Plants.post('/plants', (req, res) => {
  // access search value from body
  const { plantName } = req.body;
  // console.log(plantName);
  // make req to api
  searchPlants(plantName)
    .then(({ data }) => {
      // console.log(data);
      data.data.map(plantObj => savePlants(plantObj));
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

Plants.get('/plants', (req, res) => {});

Plants.delete('/plants', (req, res) => {});

module.exports = Plants;
