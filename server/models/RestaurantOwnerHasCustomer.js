const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const User = require('./User');
const RestaurantOwnerHasCustomer = connection.define('RestaurantOwnerHasCustomer', {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: User,
      key: 'id',
    },
    validate: {
      isCustomer(value) {
        return User.findByPk(value)
          .then(user => {
            if (user && user.role !== 'customer') {
              throw new Error('Invalid user role for customer_id');
            }
          });
      }
    }
  },
  restaurant_owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: User,
      key: 'id',
    },
    validate: {
      isRestaurantOwner(value) {
        return User.findByPk(value)
          .then(user => {
            if (user && user.role !== 'restaurant_owner') {
              throw new Error('Invalid user role for restaurant_owner_id');
            }
          });
      }
    }
  },
}, {
  tableName: 'restaurant_owner_has_customer',
  timestamps: false,
  indexes: [
    { fields: ['restaurant_owner_id'] },
    { fields: ['customer_id'] },
  ]
});

RestaurantOwnerHasCustomer.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
RestaurantOwnerHasCustomer.belongsTo(User, { foreignKey: 'restaurant_owner_id', as: 'restaurantOwner' });

module.exports = RestaurantOwnerHasCustomer;
