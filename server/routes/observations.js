const { Router } = require('express');
const { Observations } = require('../database');

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
  Observations.findAll()
    .then((dataValues) => {
      res.status(200).send(dataValues);
    })
    .catch((err) => console.error('Failed to FindAll Observations:', err));
});

// PUT/PATCH: Update
router.patch('/observations/:id', (req, res) => {
  const { id } = req.params;
  const { message, title, safe } = req.body.observation;
  Observations.update(
    { message, title, safe },
    {
      where: {
        id: id,
      },
    }
  )
    .then((data) => {
      if (data) {
        res.sendStatus(202);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to update Observation:', err);
      res.sendStatus(500);
    });
});

// Delete: Destroy
router.delete('/observations/:id', (req, res) => {
  const { id } = req.params;
  Observations.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => {
      if (data) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error('Failed to destroy observation:', err);
      res.sendStatus(500);
    });
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
