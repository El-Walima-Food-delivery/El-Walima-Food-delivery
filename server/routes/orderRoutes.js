const express = require("express");
const orderRoutes = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authenticateToken = require("../middleware/authMiddleware");
const {
  updateDeliveryLocation,
  assignDelivery,
  getDeliveryStatus,
  updateOrderStatus,
  
} = require("../controllers/deliveryController");
const {
  getDashboardData,
} = require("../controllers/orderController");
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
orderRoutes.post("/delivery/update-status", updateOrderStatus);
// orderRoutes.get("/dash/dashboard", authMiddleware, getDashboardData);


module.exports = orderRoutes;
