const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/database");
const User = require("./User");
const Restaurant = require("./Restaurant");
const MenuItem = require("./MenuItem");
const Order = require("./Order");
const Category = require("./category");

const db = {};

db.connection = Sequelize;

// Import models

// Initialize models
db.User = User;
db.Restaurant = Restaurant;
db.MenuItem = MenuItem;
db.Order = Order;
db.Category = Category;
// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = db;
