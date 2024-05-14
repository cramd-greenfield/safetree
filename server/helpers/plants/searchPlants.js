const axios = require('axios');
const { TREFLE_API_TOKEN } = require('../../config');

console.log(TREFLE_API_TOKEN);

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
}

module.exports.searchPlants = searchPlants;
