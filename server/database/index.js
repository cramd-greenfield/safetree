const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('safetree', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// async function connect() {
//   try {
//     await sequelize.sync();
//     console.log("All models were synchronized successfully.");
//     // await sequelize.authenticate();
//     // console.log('Connection has been established successfully.');
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
  googleId: DataTypes.STRING,
  username: DataTypes.STRING,
});

const Plant = sequelize.define('Plant', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  species: DataTypes.STRING,
  isEdible: DataTypes.BOOLEAN,
  image: DataTypes.STRING,
  scientificNAme: DataTypes.STRING,
});

const Animal = sequelize.define('Animal', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  species: DataTypes.STRING,
  isPredator: DataTypes.BOOLEAN,
  location: DataTypes.STRING,
});

const Itinerary = sequelize.define('Itinerary', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  hikeId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});

const Hike = sequelize.define('Hike', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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
  },
  animalId: DataTypes.INTEGER,
  plantId: DataTypes.INTEGER,
  message: DataTypes.STRING,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});

User.Observations = User.hasMany(Observations);
Observations.User = Observations.belongsTo(User);

// Will need to sync the items later. I need to reread the Sequelize docs.

module.exports = {
  User,
  Plant,
  Animal,
  Itinerary,
  Hike,
  Observations,
  sequelize,
};
