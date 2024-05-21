const express = require('express');
const packingList = express.Router();
const { PackingList, PackingListItem, User } = require('../database/index.js');

// get packing list for a specific user
packingList.get('/packingList', (req, res) => {
  // PackingList from server/database/index.js references the User id so lets use that
  const userId = req.user;
  console.log('user id', userId);
  // look inside of PackingList and see if there are any lists that belong to the user's id
  // PackingList.findAll({ where: { userId } })
  //   // if there is, send it
  //   .then((packingLists) => {
  //     res.json(packingLists);
  //   })
  //   // if not, error
  //   .catch((err) => {
  //     console.error('Error getting packing lists', err);
  //     res.sendStatus(500);
  //   });
});

module.exports = packingList;