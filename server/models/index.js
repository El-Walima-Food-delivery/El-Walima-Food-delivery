const { Sequelize } = require("sequelize");
const connection = require("../config/database");
const User = require("./User");
const Restaurant = require("./Restaurant");
const MenuItem = require("./MenuItem");
const Order = require("./Order");

// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = {
  User,
  Restaurant,
  MenuItem,
  Order,
};
