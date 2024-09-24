const express = require("express");
const authenticate = require("../middleware/authMiddleware.js");
const Router = express.Router();

const paymentController = require("../controllers/paymentController.js");
Router.post(
  "/generatePayment",
  authenticate,
  paymentController.generatePayment
);
module.exports = Router;
