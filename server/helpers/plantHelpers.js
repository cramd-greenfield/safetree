const axios = require('axios');

const searchPlants = (plantName) => {
  //receive plant name to be spliced into url to make req to api

  // const options = {
  //   url: `https://trefle.io/api/v1/plants/search?token=${TREFLE_API_TOKEN}&q=${plantName}`,
  // };

  return axios.get('https://trefle.io/api/v1/plants/search?', {
    params: {
      token: '',
      q: plantName
    }
  });
  // return result of request -> Promise
  // return axios(options);
};

const loadPlants = () => {
  return axios.get('https://trefle.io/api/v1/plants', {
    params: {
      token: '',
    }
  })
};

module.exports ={
  searchPlants,
  loadPlants,
};