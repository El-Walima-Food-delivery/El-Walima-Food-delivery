const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const MenuItem = require('./MenuItem');
const RestaurantOwnerHasCustomer = require('./RestaurantOwnerHasCustomer');
const User = require('./User'); // Import User model for role validation

const Cart = connection.define('Cart', {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RestaurantOwnerHasCustomer,
      key: 'customer_id',
    },
    validate: {
      isCustomer(value) {
        return RestaurantOwnerHasCustomer.findOne({
          where: { customer_id: value },
          include: [{
            model: User,
            as: 'customer',
            attributes: ['role'],
          }],
        }).then(relation => {
          if (relation && relation.customer.role !== 'customer') {
            throw new Error('Invalid user role for customer_id');
          }
        });
      }
    }
  },
  restaurant_owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RestaurantOwnerHasCustomer,
      key: 'restaurant_owner_id',
    },
    validate: {
      isRestaurantOwner(value) {
        return RestaurantOwnerHasCustomer.findOne({
          where: { restaurant_owner_id: value },
          include: [{
            model: User,
            as: 'restaurantOwner',
            attributes: ['role'],
          }],
        }).then(relation => {
          if (relation && relation.restaurantOwner.role !== 'restaurant_owner') {
            throw new Error('Invalid user role for restaurant_owner_id');
          }
        });
      }
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
}, {
  tableName: 'cart',
  timestamps: false,
  indexes: [
    { fields: ['menuitems_id'] },
    { fields: ['customer_id', 'restaurant_owner_id'] },
  ]
});

Cart.belongsTo(RestaurantOwnerHasCustomer, { foreignKey: ['customer_id', 'restaurant_owner_id'] });
Cart.belongsTo(MenuItem, { foreignKey: 'menuitems_id' });

module.exports = Cart;