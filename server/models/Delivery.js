const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const Order = require("./Order");
const User = require("./User");

const Delivery = connection.define(
  "Delivery",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("assigned", "in_progress", "completed"),
      defaultValue: "assigned",
    },
    current_location: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: true,
    },
  },
  {
    tableName: "deliveries",
    timestamps: true,
  }
);

Delivery.belongsTo(Order, { foreignKey: "order_id" });
Delivery.belongsTo(User, { as: "driver", foreignKey: "driver_id" });

module.exports = Delivery;
