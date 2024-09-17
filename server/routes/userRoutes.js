const express = require("express");
const Router = express.Router();
const userController = require('../controllers/userController');

// Get all users
Router.get('/users', userController.getAllUsers);

// Get user by ID
Router.get('/users/:id', userController.getUserById);

// Create a new user
Router.post('/users', userController.createUser);

// Update an existing user
Router.put('/users/:id', userController.updateUser);

// Delete a user by ID
Router.delete('/users/:id', userController.deleteUser);

// Get all users with the role 'restaurant_owner'
Router.get('/users/restaurants', userController.getAllUsersRestaurant);

// Find nearby restaurants for a customer
Router.post('/users/nearby-restaurants', userController.findNearbyRestaurants);

module.exports = Router;
