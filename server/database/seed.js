const sequelize = require('sequelize');
const { fakeUsers, fakePlants, fakeAnimals, fakeItineraries, fakeHikes, fakeObservations } = require('./fakeData');
const { User, Plant, Animal, Itinerary, Hike, Observations } =require('./index');

const seedDB = () => {

  // use models to create rows from fakeData
  // User.bulkCreate(fakeUsers)

  Plant.bulkCreate(fakePlants)

  // Animal.bulkCreate(fakeAnimals)

  // Itinerary.bulkCreate(fakeItineraries)

  Hike.bulkCreate(fakeHikes)

  // Observations.bulkCreate(fakeObservations)

};

seedDB();