const { DataTypes } = require("sequelize");
const connection = require("../config/database");

const Order = connection.define("Order", {
  status: {
    type: DataTypes.ENUM(
      "pending",
      "preparing",
      "out_for_delivery",
      "delivered"
    ),
    defaultValue: "pending",
  },
  totalAmount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = Order;
