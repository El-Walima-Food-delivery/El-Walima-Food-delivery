const { DataTypes } = require("sequelize");
const connection = require("../config/database");

const Restaurant = connection.define("Restaurant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Restaurant;
