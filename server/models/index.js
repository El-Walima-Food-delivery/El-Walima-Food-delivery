const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../config/database");
const User = require("./User");
const MenuItem = require("./MenuItem");
const Order = require("./Order");
const Category = require("./category");
const Cart = require("./carts");
const Delivery = require("./Delivery");
const OrderItem = require("./OrderItem");
const db = {};

db.connection = Sequelize;

// Import models

// Initialize models
db.User = User;
db.MenuItem = MenuItem;
db.Order = Order;
db.Category = Category;
db.Cart = Cart;
db.Delivery = Delivery;
db.OrderItem = OrderItem;
// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = db;
