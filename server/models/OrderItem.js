const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const Order = require("./Order");
const MenuItem = require("./MenuItem");

const OrderItem = connection.define(
  "OrderItem",
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
    menu_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MenuItem,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    timestamps: true,
  }
);

OrderItem.belongsTo(Order, { foreignKey: "order_id" });
OrderItem.belongsTo(MenuItem, { foreignKey: "menu_item_id" });

module.exports = OrderItem;
