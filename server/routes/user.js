const { User } = require('../database');

const getUsers = () => {
  User.findAll({}).then((data) => {
    console.log(data);
  });
};
const createUser = (req, res) => {
  User.findOrBuild({}).then((data) => {
    console.log(data);
  });
};

const updateUser = (req, res) => {
  User.update({}).then((data) => {
    console.log(data);
  });
};

const removeUser = (req, res) => {
  User.destroy({}).then((data) => {
    console.log(data);
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser,
};
