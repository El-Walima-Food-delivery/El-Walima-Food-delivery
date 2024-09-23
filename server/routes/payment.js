const express = require("express");
const Router = express.Router();
const paymentController = require("../controllers/paymentController.js");
Router.post("/payment", authenticate, paymentController.payment);
module.exports = Router;
