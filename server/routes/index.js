const { Router } = require('express');
const observations = require('./observations');
const wildlife = require('./wildlife');
const plants = require('./plants');
const hikes = require('./hikes');
const user = require('./user');

const safeTree = Router();

safeTree.get('/hikes', hikes);
safeTree.post('/hikes', hikes);

safeTree.get('/home', observations);
safeTree.post('/home', observations);

safeTree.get('/plants', plants);
safeTree.post('/plants', plants);

safeTree.get('/wildlife', wildlife);
safeTree.post('/wildlife', wildlife);

module.exports = safeTree;
