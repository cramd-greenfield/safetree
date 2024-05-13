const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("safetree", "root", "", {
  host: 'localhost',
  dialect: "mysql",
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

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

const Plant = sequelize.define("Plant", {
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

const Animal = sequelize.define("Animal", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  species: DataTypes.STRING,
  isPredator: DataTypes.BOOLEAN,
  location: DataTypes.STRING,
});

const Itinerary = sequelize.define("Itinerary", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  activityId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});

// Itinerary.sync()
//   .catch(err => console.error('Sync of Itinerary failed: ', err));

const Activity = sequelize.define("Activity", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  description: DataTypes.STRING,
  location: DataTypes.STRING,
});


const Observation = sequelize.define("Observation", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  animalId: DataTypes.INTEGER,
  plantId: DataTypes.INTEGER,
  message: DataTypes.STRING,
  date: DataTypes.DATE,
  userId: DataTypes.INTEGER,
});

// Itinerary.hasMany(Activity, {
//   foreignKey: "activityId",
// });
// Activity.belongsTo(Itinerary);

// Itinerary.hasMany(User, {
//   foreignKey: "userId",
// });
// User.belongsTo(Itinerary);

// Observation.hasMany(Plant, {
//   foreignKey: "plantId",
// });
// Plant.belongsTo(Observation);

// Observation.hasMany(Animal, {
//   foreignKey: "animalId",
// });
// Animal.belongsTo(Observation);

// Observation.hasMany(User, {
//   foreignKey: "userId",
// });
// User.belongsTo(Observation);

module.exports = {
  User,
  Plant,
  Animal,
  Itinerary,
  Activity,
  Observation,
  sequelize,
};

console.log(sequelize.models);

