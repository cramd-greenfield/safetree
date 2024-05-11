const mysql = require('mysql');
const Sequelize = require('sequelize');

// create database
const database = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
});
