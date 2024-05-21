const express = require('express');
const packingListItem = express.Router();
const { PackingList, PackingListItem, User } = require('../database/index.js');

module.exports = packingListItem;