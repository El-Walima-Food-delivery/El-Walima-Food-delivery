const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartsController");
const authMiddleware = require("../middleware/authMiddleware");
// Get all carts
router.get("/", cartController.getAllCarts);

// Get a specific cart by ID
router.get("/withid", authMiddleware, cartController.getCartById);

// Create a new cart
router.post("/", authMiddleware, cartController.createCart);

// Update an existing cart
router.put("/update/:id", cartController.updateCart);

// Delete a cart
router.delete("/delete/:id", cartController.deleteCart);

// Get carts by customer ID
router.get("/customer/:customerId", cartController.getCartByCustomerId);

// Get carts by menu item ID
router.get("/menuitem/:menuItemId", cartController.getCartByMenuItemId);

// Get carts by restaurant owner ID
router.get(
  "/restaurantowner/:restaurantOwnerId",
  cartController.getCartByRestaurantOwnerId
);

// Clear the cart
router.delete("/clear", authMiddleware, cartController.clearCart);

module.exports = router;
