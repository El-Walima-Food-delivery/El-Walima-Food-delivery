const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const User = require('./User');
const Category = require('./category');

const MenuItem = connection.define('MenuItem', {
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
  imageUrl: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  availble: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  price: {
    type: DataTypes.DECIMAL(7, 3),
    allowNull: false,
  },
  users_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    }
  },
}, {
  tableName: 'menuitems',
  timestamps: false,
  indexes: [
    { fields: ['users_id'] },
    { fields: ['category_id'] },
  ]
});

MenuItem.belongsTo(User, { foreignKey: 'users_id' });
MenuItem.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = MenuItem;
