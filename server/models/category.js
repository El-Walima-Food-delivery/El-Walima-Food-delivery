const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update the path to your config file

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
}, {
  tableName: 'category',
  timestamps: false // Disable `createdAt` and `updatedAt` if not needed
});

module.exports = Category;