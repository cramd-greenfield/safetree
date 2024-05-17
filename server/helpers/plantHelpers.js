const axios = require('axios');
require('dotenv').config();
const { TREFLE_API_TOKEN } = process.env;
const { Plant } = require('../database/index.js');

const searchPlants = (plantName) => {
  //receive plant name to be spliced into url to make req to api

  // const options = {
  //   url: `https://trefle.io/api/v1/plants/search?token=${TREFLE_API_TOKEN}&q=${plantName}`,
  // };

  return axios.get('https://trefle.io/api/v1/plants/search?', {
    params: {
      token: TREFLE_API_TOKEN,
      q: plantName
    }
  });
  // return result of request -> Promise
  // return axios(options);
};

const loadPlants = () => {
  return axios.get('https://trefle.io/api/v1/plants', {
    params: {
      token: TREFLE_API_TOKEN,
    }
  })
};

const savePlants = (plantObj) => {
  const newPlant = {
    species: plantObj.common_name,
    isEdible: false,
    isObserved: false,
    image: plantObj.image_url,
    scientificName: plantObj.scientific_name
  };

  // console.log(newPlant)
  Plant.findAll({
    where: {
      species: newPlant.species,
    }
  })
    .then(foundPlant => {
      // console.log(data);
      if (!foundPlant.length) {
        // if no matching plant is found, create new plant
        return Plant.create(newPlant);
      }
    })
    .catch(err => console.error(err))
};

module.exports ={
  searchPlants,
  loadPlants,
  savePlants,
};