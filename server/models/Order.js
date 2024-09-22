const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const MenuItem = require("./MenuItem");
const User = require("./User");

const Order = connection.define(
  "Order",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    restaurant_owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    menuitems_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MenuItem,
        key: "id",
      },
    },
    messeges: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  },
  {
    tableName: "orders",
    timestamps: false,
    indexes: [
      { fields: ["menuitems_id"] },
      { fields: ["customer_id", "restaurant_owner_id"] },
    ],
  }
);

Order.belongsTo(User, { as: "customer", foreignKey: "customer_id" });
Order.belongsTo(User, {
  as: "restaurantOwner",
  foreignKey: "restaurant_owner_id",
});
Order.belongsTo(MenuItem, { foreignKey: "menuitems_id" });

module.exports = Order;
