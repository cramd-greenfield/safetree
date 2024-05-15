const { Router } = require('express');
const { searchPlants } = require('../helpers/plants/searchPlants');
const { Plant } = require('../database/index.js');

const Plants = Router();

// makes search to api
Plants.get('/plants', (req, res) => {
  // would this be for the search ?

  // access search value from params (?)
  const { plantName } = req.params;

  // make req to api
  searchPlants(plantName)
    .then(({data} => console.log(data))) // respond with list of plants + 200 status code
    .catch(err => console.error(err)); // respond w 500 status code
});

Plants.post('/plants', (req, res) => {});


Plants.get('/plants', (req, res) => {});

Plants.delete('/plants', (req, res) => {});

module.exports = Plants;
