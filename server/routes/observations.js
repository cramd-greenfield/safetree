const { Router } = require('express');
const { Observations } = require('../database');

const router = Router();

// POST: Create
router.post('/observations', (req, res) => {
  const { message, safe } = req.body.observation;
  Observations.create({ message, safe })
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
  const { message, safe } = req.body.observation;
  Observations.update(
    { message, safe },
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
