const express = require("express");
const orderRoutes = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const {
  updateDeliveryLocation,
  assignDelivery,
  getDeliveryStatus,
} = require("../controllers/deliveryController");
const {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

orderRoutes.post("/create", authenticateToken, createOrder);
orderRoutes.get("/:id", getOrderById);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);
orderRoutes.post("/update-location", updateDeliveryLocation);
orderRoutes.post("/assign-delivery", assignDelivery);
orderRoutes.get("/delivery-status/:orderId", getDeliveryStatus);

module.exports = orderRoutes;
