const express = require("express");
const restaurantRoutes = express.Router();
const { Restaurant } = require("../models");
const {
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");
restaurantRoutes.post("/create", createRestaurant);
restaurantRoutes.get("/:id", getRestaurantById);
restaurantRoutes.put("/:id", updateRestaurant);
restaurantRoutes.delete("/:id", deleteRestaurant);

module.exports = restaurantRoutes;
