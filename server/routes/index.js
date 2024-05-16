const { Router } = require('express');
const observations = require('./observations');
const wildlife = require('./wildlife');
const plants = require('./plants');
const hikes = require('./hikes');
const user = require('./user');

const safeTree = Router();

safeTree.all('/hikes', hikes);

safeTree.get('/observations', observations);
safeTree.post('/observations', observations);

safeTree.get('/plants', plants);
safeTree.post('/plants', plants);

safeTree.all('/wildlife', wildlife);


module.exports = safeTree;
