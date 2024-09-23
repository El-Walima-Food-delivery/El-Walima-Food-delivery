const { DataTypes } = require("sequelize");
const connection = require("../config/database");
const MenuItem = require("./MenuItem");
const User = require("./User");

const Cart = connection.define(
  "Cart",
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "cart",
    timestamps: false,
    indexes: [
      { fields: ["menuitems_id"] },
      { fields: ["customer_id", "restaurant_owner_id"] },
    ],
  }
);

Cart.belongsTo(User, { as: "customer", foreignKey: "customer_id" });
Cart.belongsTo(User, {
  as: "restaurantOwner",
  foreignKey: "restaurant_owner_id",
});
Cart.belongsTo(MenuItem, { foreignKey: "menuitems_id" });

module.exports = Cart;
