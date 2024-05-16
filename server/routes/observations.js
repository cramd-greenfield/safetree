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
  console.log('Update');
});

// Delete: Destroy
router.delete('/observations', (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  console.log('user', user, 'id', id);
});

module.exports = router;

/*
const Observations = sequelize.define('Observations', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  animalId: DataTypes.INTEGER,
  plantId: DataTypes.INTEGER,
  message: DataTypes.STRING,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});
*/
