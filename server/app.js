const express = require('express');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

const PORT = 3000;

// Creating GET request for some functionality
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/v1/animals?name=', (req, res) => {

  Animal.findAll({
    attributes: ['species', 'isPredator', 'location']
  })
  .then((response) => {

  })
  .catch((response) => {
    console.error('Error present! ', response);
  })

})

module.exports = {
  app,
};
