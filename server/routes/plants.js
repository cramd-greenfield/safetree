const { Router } = require('express');
const { searchPlants } = require('../helpers/plants/searchPlants');
const { Plant } = require('../database/index.js');

const Plants = Router();

console.log(searchPlants);

// makes search to api
Plants.get('/plants', (req, res) => {
  // would this be for the search ?
  // make req to api
  // save results of search to database
});

Plants.post('/plants', (req, res) => {});

Plants.get('/plants', (req, res) => {});

Plants.delete('/plants', (req, res) => {});

module.exports = {
  Plants,
};
