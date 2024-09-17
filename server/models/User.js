const { DataTypes } = require("sequelize");
const connection = require("../config/database");

const User = connection.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("customer", "restaurant_owner", "driver"),
    defaultValue: "customer",
  },
});

module.exports = User;
