const express = require('express');
const router = express.Router();
const { createMenuItem, getMenuItemById, updateMenuItem, deleteMenuItem, getMenuItemsByCategory, getMenuItemsByName, getMenuItemsByPrice, getAllMenuItems, getAllAvailableMenuItems, getAllUnavailableMenuItems, gaga, updateMenuItemAvailble, gagafalse } = require('../controllers/MenuItemsController');
const authMiddleware = require('../middleware/authMiddleware');
// Create a new menu item
router.post('/', createMenuItem);

// Get a menu item by ID
router.get('/:id', getMenuItemById);

// Update a menu item by ID
router.put('/:id', updateMenuItem);

// Delete a menu item by ID
router.delete('/:id', deleteMenuItem);

// Get menu items by category ID
router.get('/cat/:category_id', getMenuItemsByCategory);

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

// Get menu items by restaurant
router.get('/owner/restaurant', authMiddleware, gaga);
router.get('/owner/archive',authMiddleware,gagafalse)
// Route to toggle menu item availability
router.patch(
  '/:id/availability', updateMenuItemAvailble
  
 
);

module.exports = router;