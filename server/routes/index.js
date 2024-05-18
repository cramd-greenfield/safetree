const { Router } = require('express');
const observations = require('./observations');
const wildlife = require('./wildlife');
const plants = require('./plants');
const hikes = require('./hikes');
const user = require('./user');

const safeTree = Router();

safeTree.post('/hikeSearch', hikes);
safeTree.all('/hikes', hikes);

// safeTree.all('/observations', observations);
safeTree.route('/observations').all(observations);
safeTree.route('/observations/:id').all(observations);

safeTree.get('/plants', plants);
safeTree.post('/plants', plants);

module.exports = safeTree;
