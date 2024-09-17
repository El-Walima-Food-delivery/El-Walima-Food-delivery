const express = require("express");
const orderRoutes = express.Router();
const { Order } = require("../models");
const {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

orderRoutes.post("/create", createOrder);
orderRoutes.get("/:id", getOrderById);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);

module.exports = orderRoutes;
