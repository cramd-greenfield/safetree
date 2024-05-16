const fakeUsers = [
  {
    id: 1,
    username: 'Spongebob',
    googleId: 1001,
  },
  {
    id: 2,
    username: 'Patrick',
    googleId: 2001,
  },
  {
    id: 3,
    username: 'Squidward',
    googleId: 3001,
  },
  {
    id: 4,
    username: 'Sandy',
    googleId: 4001,
  },
];

const fakePlants = [
  {
    // id: 64135,
    id: 1,
    species: 'Oleander',
    isEdible: false,
    isObserved: false,
    image:
      'https://bs.plantnet.org/image/o/2ff93222759bd7436338492c834074bba64948f4',
    scientificName: 'Nerium oleander',
  },
  {
    // id: 216209,
    id: 2,
    species: 'Jasmine',
    isEdible: false,
    isObserved: false,
    image:
      'https://bs.plantnet.org/image/o/799816cf93b96cb5b89aae91b012150459cfb84a',
    scientificName: 'Jasminum simplicifolium',
  },
  {
    // id: 227114,
    id: 3,
    species: 'Barnyard grass',
    isEdible: false,
    isObserved: false,
    image:
      'https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900',
    scientificName: 'Dactylis glomerata',
  },
  {
    // id: 206041,
    id: 4,
    species: 'Lily-of-the-valley',
    isEdible: false,
    isObserved: false,
    image:
      'https://bs.plantnet.org/image/o/14a65dc4d1be00ebb24d894c4d4151855d263930',
    scientificName: 'Convallaria majalis',
  },
];

const fakeAnimals = [
  {
    // id: 1,
    species: 'Bald Eagle',
    isPredator: true,
    location: 'North America',
  },
  {
    id: 2,
    species: 'African Forest Elephant',
    isPredator: true,
    location: 'Africa',
  },
  {
    id: 3,
    species: 'Indochinese Tiger',
    isPredator: true,
    location: 'Asia',
  },
  {
    id: 4,
    species: 'Bobcat',
    isPredator: true,
    location: 'Central-America',
  },
];

const fakeItineraries = [
  {
    id: 1,
    hikeId: 1,
    date: '2024-05-15',
    userId: 1,
  },
  {
    id: 2,
    hikeId: 2,
    date: '2024-05-15',
    userId: 1,
  },
  {
    id: 3,
    hikeId: 3,
    date: '2024-05-15',
    userId: 4,
  },
  {
    id: 4,
    hikeId: 4,
    date: '2024-05-15',
    userId: 2,
  },
];

const fakeHikes = [
  {
    id: 1,
    description: 'Pivotwood Trail',
    location: '2281 Pivot Rock Rd, Eureka Springs, AR 72632, USA',
    rating: 0,
  },
  {
    id: 2,
    description: 'Bayou Sauvage Urban National Wildlife Refuge',
    location: '17160 Chef Menteur Hwy, New Orleans, LA 70129, USA',
    rating: 0,
  },
  {
    id: 3,
    description: 'Audubon Adventure Trail',
    location: '11000 Lake Forest Blvd, New Orleans, LA 70127, USA',
    rating: 0,
  },
  {
    id: 4,
    description: 'Bayou Sauvage NWR Ridge Trail & Boardwalk',
    location: '20876 Chef Menteur Hwy, New Orleans, LA 70129, USA',
    rating: 0,
  },
];

// const fakeObservations = [
//   {
//     id: 1,
//     message: 'I loved this trail.',
//     PlantId: 1,
//     AnimalId: 1,
//     HikeId: 1,
//   },
//   {
//     id: 2,
//     message: 'This trail was boring.',
//     PlantId: 2,
//     AnimalId: 2,
//     HikeId: 2,
//   },
//   {
//     id: 3,
//     message: 'Parking lot was cool.',
//     PlantId: 3,
//     AnimalId: 3,
//     HikeId: 3,
//   },
//   {
//     id: 4,
//     message: 'Saw a ton of plants on this trail.',
//     PlantId: 4,
//     AnimalId: 4,
//     HikeId: 4,
//   },
// ];

const fakeObservations = [
  {
    userId: fakeUsers[0].id,
    message: 'I loved this trail.',
    PlantId: fakePlants[0].species,
    AnimalId: fakeAnimals[0].species,
    HikeId: fakeHikes[0].description,
  },
  {
    userId: fakeUsers[1].id,
    message: 'This trail was boring.',
    PlantId: fakePlants[1].species,
    AnimalId: fakeAnimals[1].species,
    HikeId: fakeHikes[1].description,
  },
  {
    userId: fakeUsers[2].id,
    message: 'Parking lot was cool.',
    PlantId: fakePlants[2].species,
    AnimalId: fakeAnimals[2].species,
    HikeId: fakeHikes[2].description,
  },
  {
    userId: fakeUsers[3].id,
    message: 'Saw a ton of plants on this trail.',
    PlantId: fakePlants[3].species,
    AnimalId: fakeAnimals[3].species,
    HikeId: fakeHikes[3].description,
  },
];

module.exports = {
  fakeUsers,
  fakePlants,
  fakeAnimals,
  fakeItineraries,
  fakeHikes,
  fakeObservations,
};
