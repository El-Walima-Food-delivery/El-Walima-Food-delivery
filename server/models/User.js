const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const User = connection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
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
  imagesUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  balance: {
    type: DataTypes.DECIMAL(7, 3),
    allowNull: true,
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: false,
  },
  role: {
      type: DataTypes.ENUM('customer', 'restaurant_owner', 'driver'),
    defaultValue: 'customer',
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
    {
      type: 'SPATIAL',
      fields: ['location'],
    }
  ]
});

module.exports = User;
