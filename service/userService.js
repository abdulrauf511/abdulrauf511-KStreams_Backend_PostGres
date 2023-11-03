const { models } = require("../models");
//Db operations
module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addUser: async (data) => {
    //add new user to the array
    const users = await models.user.create(data);
    return users;
  },
  updatedUserService: (userID, data) => {
    const userIndex = user.findIndex((u) => u.id == userID);
    user[userIndex] = { ...user[userIndex], ...data };
    return user;
  },
  deleteUser: (userID) => {
    const userIndex = user.findIndex((u) => u.id == userID);
    user.splice(userIndex, 1);
    return user;
  },
};
