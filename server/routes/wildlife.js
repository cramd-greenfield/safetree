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
const axios = require('axios');
const router = Router();
require('dotenv').config();
const { ANIMALS_API_KEY } = process.env;


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

router.post('/wildLifeSearch', (req, res) => {
  // console.log('REQ BODY', req);
  axios.get(`https://api.api-ninjas.com/v1/animals?name=${req.body.searchInput}`, {
    headers: { 'X-Api-Key': ANIMALS_API_KEY }
  })
    .then((response) => {
      console.log('API RESPONSE:', response.data);
      const animals = response.data.map(animal => { //animals created here array of objects
        return {
          species: animal.name,
          isPredator: animal.characteristics.prey !== undefined,
          location: animal.locations.join(", ")
        };
      });
      //CR

      //insert the animals objects into the Animals database
      Animal.bulkCreate(animals)
        .then(() => {
          console.log('Animals successfully added to database!', animals)
          res.status(200).send(animals)
        })
        .catch((error) => {
          console.error('Animals not added!')
          res.sendStatus(500);
        })
    })
    .catch((error) => {
      console.error('Error locating animal list:', error);
      res.sendStatus(500);
    });
})

router.delete('/wildlife', (req, res) => {
  console.log('REQ BODY!!!', req.body);
  const species = req.body.species;
    Animal.destroy({ where: { species } })  
    .then(() => {
      console.log('Animal successfully deleted!');
      res.status(200).send({ message: 'Animal successfully deleted!' });
    })
    .catch((error) => {
      console.error('Error deleting animal:', error);
      res.sendStatus(500);
    });
});

module.exports = router;

// const searchAnimal = () => {
//   axios.get(`https://api.api-ninjas.com/v1/animals?name=${emptyInput}`, {
//     headers: { 'X-Api-Key': process.env.ANIMALS_API_KEY }
//   })
//   .then((response) => {
//     console.log('NEW RESPONSE:', response);
//     updateList(response.data);
//   })
//   .catch((error) => {
//     console.error('Error locating animal list:', error);
//   });
// }

// router.get('/wildlife', (req, res) => {

//   Animal.findAll()
//   .then((response) => {
//     console.log('Check out these animals that matches your search!', response);
//     res.status(200).send(response);
//   })
//   .catch((error) => {
//     console.error('Problem finding desired animal!', error);
//     res.sendStatus(500);
//   });
// });


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

