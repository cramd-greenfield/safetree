const { User } = require('../database');
const { Router } = require('express');
const user = Router();

user.post('/user', (req, res) => {
  User.findOrBuild({}).then((data) => {
    console.log(data);
  });
});
user.get('/user', (req, res) => {
  User.findAll({}).then((data) => {
    console.log(data);
  });
});
user.patch('/user', (req, res) => {
  User.update({}).then((data) => {
    console.log(data);
  });
});
user.delete('/user', (req, res) => {
  User.destroy({}).then((data) => {
    console.log(data);
  });
});

module.exports = user;
