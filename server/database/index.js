const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('safetree', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync(),
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

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  googleId: DataTypes.STRING,
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
  hikeId: DataTypes.INTEGER, // Probably wont work without creating the relationships
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER, // Probably wont work without creating the relationships
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
  AnimalId: {
    type: DataTypes.INTEGER,
    references: {
      model: Animal,
      key: 'id',
    },
  },
  HikeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Hike,
      key: 'id',
    },
  },
  PlantId: {
    type: DataTypes.INTEGER,
    references: {
      model: Plant,
      key: 'id',
    },
  },
});
User.hasMany(Observations);
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
