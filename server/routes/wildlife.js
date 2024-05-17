// Does not go in app.js...

// app.get('/v1/animals?name=', (req, res) => {

//   Animal.findAll({
//     attributes: ['species', 'isPredator', 'location']
//   })
//   .then((response) => {

//   })
//   .catch((response) => {
//     console.error('Error present! ', response);
//   })

// })
const { Router } = require('express');

const { Animal } = require('../database');

const router = Router();
// const { ANIMALS_API_KEY } = process.env;
//how will it get animals if not external api here

router.get('/wildlife', (req, res) => {

  Animal.findAll()
  .then((response) => {
    console.log('Check out these animals that matches your search!', response);
    res.status(200).send(response);
  })
  .catch((error) => {
    console.error('Problem finding desired animal!', error);
    res.sendStatus(500);
  });
});

module.exports = router;
// const loadList = () => {
//   // console.log('hello')
//   axios.get(`https://api.api-ninjas.com/v1/animals?name=`, {
//   })
//   .then((response) => {
//     console.log('Hello!');
//     //we will update the list, with this data we just retrieved, but we need to figure how to get just the results we desire
//     updateList(response);
//   })
//   .catch((response) => {
//     console.error('Animal was not retrieved!', response)
//   })
// }

