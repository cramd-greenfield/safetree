const { Router } = require('express');
const { Observations, User } = require('../database');

const router = Router();

// POST: Create
router.post('/observations', (req, res) => {
  const { message, title, date, safe } = req.body.observation;
  Observations.create({ message, title, date, safe })
    .then((obsObject) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Failed to create observation:', err);
      res.sendStatus(500);
    });
});

// GET: Read
router.get('/observations', (req, res) => {
  Observations.findAll({})
    .then((dataValues) => {
      res.status(200).send(dataValues);
    })
    .catch((err) => console.error('Failed to FindAll Observations:', err));
});

// PUT/PATCH: Update
router.get('/observations/:id', (req, res) => {
  //example
  User.update(
    { lastName: 'Doe' },
    {
      where: {
        lastName: null,
      },
    }
  );
  console.log('Update');
});

// Delete: Destroy
router.delete('/observations', (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  // findByPk obtains single entry from the table, using the provided PRIMARY KEY
  console.log('user', user, 'id', id);
});

module.exports = router;

/*
const { Router } = require('express');
const { Observations, User } = require('../database');

// POST: Create
const createObservation = (req, res) => {
  const { observation } = req.params;
  // const { message, title, date, safe } = req.body.observation;
  console.log(observation);
  User.create({ message, title, date, safe }).then((data) => {
    console.log(data);
  });
};

// GET: Read
const getObservation = (req, res) => {
  const { observation } = req.params;

  User.findAll({ observation })
    .then((dataValues) => {
      res.status(200).send(dataValues);
    })
    .catch((err) => console.error('Failed to FindAll Observations:', err));
};

// PUT/PATCH: Update
const updateObservation = (req, res) => {
  //example
  User.update(
    { lastName: 'Doe' },
    {
      where: {
        lastName: null,
      },
    }
  );
  console.log('Update');
};

// Delete: Destroy
const deleteObservation = (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  // findByPk obtains single entry from the table, using the provided PRIMARY KEY
  console.log('user', user, 'id', id);
};

module.exports = {
  obs: {
    createObservation,
    getObservation,
    updateObservation,
    deleteObservation,
  },
};
*/
