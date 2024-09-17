const { Sequelize,DataTypes } = require("sequelize");
const connection = require("../config/database");
const User = require("./User");
const Restaurant = require("./Restaurant");
const MenuItem = require("./MenuItem");
const Order = require("./Order");



const db = {}



db.connection = Sequelize;


// Import models


// Initialize models
db.User = new User(Sequelize, DataTypes);
db.Restaurant = new Restaurant(Sequelize, DataTypes);
db.MenuItem = new MenuItem(Sequelize, DataTypes);
db.Order = new Order(Sequelize, DataTypes);

// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = db ;
