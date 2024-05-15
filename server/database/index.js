const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('safetree', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    User.sync();
    Plant.sync();
    Animal.sync();
    Itinerary.sync();
    Hike.sync();
    Observations.sync();
    console.log('Connected');
  } catch (err) {
    console.error('Failed to connect:', err);
  }
})();
// async function connect() {
//   try {
//     await sequelize.sync();
//     console.log("All models were synchronized successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// connect();

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
});

const Plant = sequelize.define('Plant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  species: DataTypes.STRING,
  isEdible: DataTypes.BOOLEAN,
  isObserved: DataTypes.BOOLEAN,
  image: DataTypes.STRING,
  scientificNAme: DataTypes.STRING,
});

const Animal = sequelize.define('Animal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  species: DataTypes.STRING,
  isPredator: DataTypes.BOOLEAN,
  location: DataTypes.STRING,
});

const Itinerary = sequelize.define('Itinerary', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hikeId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});

const Hike = sequelize.define('Hike', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: DataTypes.STRING,
  location: DataTypes.STRING,
  rating: DataTypes.INTEGER,
});

const Observations = sequelize.define('Observations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  message: DataTypes.STRING,
  date: DataTypes.DATE,
});

User.hasMany(Observations);

Observations.hasMany(Plant);
Observations.hasMany(Animal);
Observations.hasMany(Hike);

Observations.belongsTo(User);

module.exports = {
  User,
  Plant,
  Animal,
  Itinerary,
  Hike,
  Observations,
  sequelize,
};
