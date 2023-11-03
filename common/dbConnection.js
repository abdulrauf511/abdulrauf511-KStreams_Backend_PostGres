const { Sequelize } = require("sequelize");
const config = require("../config");
const database = new Sequelize(config.db);
database
  .authenticate()
  .then(() => {
    console.log("DB connection established");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = database;
