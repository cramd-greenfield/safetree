const { Router } = require('express');
const { searchPlants, loadPlants, savePlants } = require('../helpers/plantHelpers.js');
const { Plant } = require('../database/index.js');
const { Op } = require("sequelize");

const Plants = Router();

// makes search to api
Plants.get('/plants', (req, res) => {
  Plant.findAll({ limit: 5 })
    .then(data => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

Plants.post('/plants', (req, res) => {
  // access search value from body
  const { plantName } = req.body;
  // console.log(plantName);
  // make req to api
  searchPlants(plantName)
    .then(({ data }) => {
      // console.log(data.data);
      const dbQuery = data.data.map(plantObj => savePlants(plantObj));
      // res.status(201).send(data);
      
      // // condense promises from queries
      return Promise.all(dbQuery)
      //   .then(data => console.log(data));
      
    })
    .then(() => {
      Plant.findAll({
        where: {
          species: {
            [Op.substring]: plantName,
          }
        }
      })
        .then(foundPlants => {
          res.status(203).send(foundPlants)
        })
        .catch(err => console.log(err));
    })
    // .then(data => console.log(data))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

Plants.patch('/plants/:id', (req, res) => {
  // access plant id via req.params
  const { id } = req.params;
  console.log(id);

  // access isUpdate status via req.body
  const { isObserved } = req.body.plant;


  Plant.update(
    {
      isObserved,
    },
    {
      where: {
        id,
      }
    },
  )
    .then(rowsChanged => { // rowsChanged is an array w a number i.e. [1] or [0]
      if (rowsChanged[0]) {
        // if rowsChanged is not falsy / NOT [0] -> send 200 status code
        res.sendStatus(200);
      } else { 
        // if values being updated does not exist in db / [0] -> send 404 status code
        res.sendStatus(404);
      }
    })
    .catch(err => res.sendStatus(500));

});

Plants.delete('/plants/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);

  Plant.destroy({
    where: {
      id,
    }
  })
    .then(rowsDeleted => {
      if (rowsDeleted) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(err => res.sendStatus(500));
});

module.exports = Plants;
