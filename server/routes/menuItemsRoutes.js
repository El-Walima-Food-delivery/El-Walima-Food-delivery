const express = require('express');
const router = express.Router();
const { createMenuItem, getMenuItemById, updateMenuItem, deleteMenuItem, getMenuItemsByCategory, getMenuItemsByName, getMenuItemsByPrice, getAllMenuItems, getAllAvailableMenuItems, getAllUnavailableMenuItems } = require('../controllers/MenuItemsController');

// Create a new menu item
router.post('/', createMenuItem);

// Get a menu item by ID
router.get('/:id', getMenuItemById);

// Update a menu item by ID
router.put('/:id', updateMenuItem);

// Delete a menu item by ID
router.delete('/:id', deleteMenuItem);

// Get menu items by category ID
router.get('/category/:categoryId', getMenuItemsByCategory);

// Get menu items by name
router.get('/name/:name', getMenuItemsByName);

// Get menu items by price
router.get('/price/:price', getMenuItemsByPrice);

// Get all menu items
router.get('/', getAllMenuItems);

// Get all available menu items
router.get('/available', getAllAvailableMenuItems);

// Get all unavailable menu items
router.get('/unavailable', getAllUnavailableMenuItems);

module.exports = router;