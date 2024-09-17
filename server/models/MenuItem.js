const { DataTypes } = require("sequelize");
const connection = require("../config/database");

const MenuItem = connection.define("MenuItem", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = MenuItem;
