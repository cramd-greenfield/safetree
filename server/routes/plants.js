const { Router } = require('express');
const { searchPlants, loadPlants } = require('../helpers/plantHelpers.js');
const { Plant } = require('../database/index.js');

const Plants = Router();

// makes search to api
Plants.get('/plants', (req, res) => {
  // would this be for the search ?
<<<<<<< HEAD
<<<<<<< HEAD

  // access search value from params (?)
  const { plantName } = req.params;

  // make req to api
  searchPlants(plantName)
    .then((({data}) => console.log(data))) // respond with list of plants + 200 status code
    .catch(err => console.error(err)); // respond w 500 status code
=======
=======
>>>>>>> 22cd59d84405db16904604647023704f4f115ddb
  loadPlants()
    .then(({ data })=> {
      console.log(data.data.length);
      res.status(201).send(data.data);
    })
    .catch(err => {
      console.error('failed to load plants', err);
      res.sendStatus(500);
    });
<<<<<<< HEAD
>>>>>>> c1e1da02c9a2289c18af8c388e371c51e991dc6c
=======
>>>>>>> 22cd59d84405db16904604647023704f4f115ddb
});

Plants.post('/plants', (req, res) => {
  // access search value from body
  const { plantName } = req.body;
  console.log(plantName);
  // make req to api
  searchPlants(plantName)
    .then((({data}) => {
      console.log(data);
      res.status(201).send(data.data)
    }))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});


Plants.get('/plants', (req, res) => {});

Plants.delete('/plants', (req, res) => {});

module.exports = Plants;
