const { fakeUsers, fakePlants, fakeAnimals, fakeItineraries, fakeHikes, fakeObservations } = require('./fakeData');
const { User, Plant, Animal, Itinerary, Hike, Observations } =require('./index');

const seedDB = () => {

  User.destroy({
    where: {}
  })
    .then(() => {
      User.bulkCreate(fakeUsers)
        .catch((err) => {
          console.error('Failed to add fake user records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy user records', err);
    })

  Plant.destroy({
    where: {}
  })
    .then(() => {
      Plant.bulkCreate(fakePlants)
        .catch((err) => {
          console.error('Failed to add fake plant records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy plant records', err);
    })

  Animal.destroy({
    where: {}
  })
    .then(() => {
      Animal.bulkCreate(fakeAnimals)
        .catch((err) => {
          console.error('Failed to add fake animal records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy animal records', err);
    })

  Itinerary.destroy({
    where: {}
  })
    .then(() => {
      Itinerary.bulkCreate(fakeItineraries)
        .catch((err) => {
          console.error('Failed to add fake itinerary records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy itinerary records', err);
    })

  Hike.destroy({
    where: {}
  })
    .then(() => {
      Hike.bulkCreate(fakeHikes)
        .catch((err) => {
          console.error('Failed to add fake hike records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy hike records', err);
    })

  Observations.destroy({
    where: {},
  })
    .then(() => {
      Observations.bulkCreate(fakeObservations)
        .catch((err) => {
          console.error('Failed to add fake observations records', err);
        })
    })
    .catch((err) => {
      console.error('Failed to destroy observations records', err);
    })

};

seedDB();