
const fakeUsers = [
  {
    username: 'Spongebob'
  },
  {
    username: 'Patrick'
  },
  {
    username: 'Squidward'
  },
  {
    username: 'Sandy'
  },
];

const fakePlants = [
  {
    // id: 64135,
    species: 'Oleander',
    isEdible: false,
    isObserved: false,
    image: 'https://bs.plantnet.org/image/o/2ff93222759bd7436338492c834074bba64948f4',
    scientificName: 'Nerium oleander'
  },
  {
    // id: 216209,
    species: 'Jasmine',
    isEdible: false,
    isObserved: false,
    image: 'https://bs.plantnet.org/image/o/799816cf93b96cb5b89aae91b012150459cfb84a',
    scientificName: 'Jasminum simplicifolium'
  },
  {
    // id: 227114,
    species: 'Barnyard grass',
    isEdible: false,
    isObserved: false,
    image: 'https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900',
    scientificName: 'Dactylis glomerata'
  },
  {
    // id: 206041,
    species: 'Lily-of-the-valley',
    isEdible: false,
    isObserved: false,
    image: 'https://bs.plantnet.org/image/o/14a65dc4d1be00ebb24d894c4d4151855d263930',
    scientificName: 'Convallaria majalis'
  }
];

const fakeAnimals = [
  {
    species: 'Bald Eagle',
    isPredator: true,
    location: 'North America'
    },
    {
    species: 'African Forest Elephant',
    isPredator: true,
    location: 'Africa'
    },
    {
    species: 'Indochinese Tiger',
    isPredator: true,
    location: 'Asia'
    },
    {
    species: 'Bobcat',
    isPredator: true,
    location: 'Central-America'
    }
];

const fakeItineraries = [
  {
    hikeId: 1,
    date: '2024-05-15',
    userId: 1
  },
  {
    hikeId: 2,
    date: '2024-05-15',
    userId: 1
  },
  {
    hikeId: 3,
    date: '2024-05-15',
    userId: 4
  },
  {
    hikeId: 4,
    date: '2024-05-15',
    userId: 2
  },
];

const fakeHikes = [
  {
    description: 'Pivotwood Trail',
    location: '2281 Pivot Rock Rd, Eureka Springs, AR 72632, USA',
    rating: 0,
  },
  {
    description: 'Bayou Sauvage Urban National Wildlife Refuge',
    location: '17160 Chef Menteur Hwy, New Orleans, LA 70129, USA',
    rating: 0,
  },
  {
    description: 'Audubon Adventure Trail',
    location: '11000 Lake Forest Blvd, New Orleans, LA 70127, USA',
    rating: 0,
  },
  {
    description: 'Bayou Sauvage NWR Ridge Trail & Boardwalk',
    location: '20876 Chef Menteur Hwy, New Orleans, LA 70129, USA',
    rating: 0,
  },
];

const fakeObservations = [
  {
    message: 'I loved this trail.',
    data: '2024-05-15'
  },
  {
    message: 'This trail was boring.',
    data: '2024-05-15'
  },
  {
    message: 'Parking lot was cool.',
    data: '2024-05-15'
  },
  {
    message: 'Saw a ton of plants on this trail.',
    data: '2024-05-15'
  },
];

module.exports = {
  fakeUsers,
  fakePlants,
  fakeAnimals,
  fakeItineraries,
  fakeHikes,
  fakeObservations
};
