const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const MenuItem = require('./MenuItem');
const RestaurantOwnerHasCustomer = require('./RestaurantOwnerHasCustomer');

const Order = connection.define('Order', {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RestaurantOwnerHasCustomer,
      key: 'customer_id',
    }
  },
  restaurant_owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RestaurantOwnerHasCustomer,
      key: 'restaurant_owner_id',
    }
  },
  menuitems_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MenuItem,
      key: 'id',
    }
  },
  messeges: {
    type: DataTypes.STRING(1000),
    allowNull: true,
  },
}, {
  tableName: 'orders',
  timestamps: false,
  indexes: [
    { fields: ['menuitems_id'] },
    { fields: ['customer_id', 'restaurant_owner_id'] },
  ]
});

Order.belongsTo(RestaurantOwnerHasCustomer, { foreignKey: ['customer_id', 'restaurant_owner_id'] });
Order.belongsTo(MenuItem, { foreignKey: 'menuitems_id' });

module.exports = Order;