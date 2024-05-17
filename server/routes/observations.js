const { Router } = require('express');
const { Observations, User } = require('../database');

const router = Router();

// POST: Create
router.post('/observations', (req, res) => {
  const { message } = req.params;
  const { observation } = req.body;
  console.log('observation', observation, 'msg', message);
  User.create(message).then((data) => {
    console.log('data', data);
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
router.get('/observations', (req, res) => {
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
