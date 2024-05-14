const { Router } = require('express');
const { Observations } = require('../database');

const router = Router();

// POST: Create
router.post('/home', (req, res) => {
  console.log('Create');
});
// GET: Read
router.get('/home', (req, res) => {
  Observations.findAll({}).then((data) => {
    console.log(data);
  });
});
// PUT/PATCH: Update
router.get('/home', (req, res) => {
  console.log('Update');
});
// Delete: Destroy
router.delete('/home', (req, res) => {
  console.log('Destroy');
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
