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
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  imagesUrl: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
  },
  balance: {
    type: DataTypes.DECIMAL(7, 3),
    allowNull: true,
    defaultValue: null,
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('customer', 'restaurant_owner', 'driver'),
    allowNull: false,
    defaultValue: 'customer',
  },
}, {
  tableName: 'users',
  timestamps: false,
  indexes: [
    { unique: true, fields: ['email'] },
    { type: 'SPATIAL', fields: ['location'] },
  ]
});

module.exports = User;
