const express = require("express");
const authRoutes = express.Router();
const { User } = require("../models");
const { Signup, Login } = require("../controllers/authController");

authRoutes.post("/Signup", Signup);
authRoutes.post("/Login", Login);

module.exports = authRoutes;
