const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const Category = connection.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
}, {
  tableName: 'category',
  timestamps: false,
});

module.exports = Category;