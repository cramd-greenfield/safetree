const axios = require('axios');
require('dotenv').config();
const { TREFLE_API_TOKEN } = process.env;

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

module.exports ={
  searchPlants,
  loadPlants,
};