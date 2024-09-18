const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartsController');

// Get all carts
router.get('/', cartController.getAllCarts);

// Get a specific cart by ID
router.get('/:id', cartController.getCartById);

// Create a new cart
router.post('/', cartController.createCart);

// Update an existing cart
router.put('/:id', cartController.updateCart);

// Delete a cart
router.delete('/:id', cartController.deleteCart);

// Get carts by customer ID
router.get('/customer/:customerId', cartController.getCartByCustomerId);

// Get carts by menu item ID
router.get('/menuitem/:menuItemId', cartController.getCartByMenuItemId);

// Get carts by restaurant owner ID
router.get('/restaurantowner/:restaurantOwnerId', cartController.getCartByRestaurantOwnerId);

module.exports = router;