const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const User = require("./User");

const Order = connection.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "preparing", "on_the_way", "delivered"),
      defaultValue: "pending",
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "orders",
    timestamps: true,
  }
);

Order.belongsTo(User, { foreignKey: "user_id" });

module.exports = Order;
