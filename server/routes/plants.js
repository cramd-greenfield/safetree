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


Plants.post('/plants', (req, res) => {
  // save plant to db
  // access plant obj from req.body
  const { plantObj } = req.body;
  // pass plantObj to Plant.create
  Plant.create()
    .then()
});

Plants.patch('/plants/:id', (req, res) => {
  // update isEdible property
});

Plants.delete('/plants', (req, res) => {
  // delete plant obj
});

module.exports = {
  Plants
};
