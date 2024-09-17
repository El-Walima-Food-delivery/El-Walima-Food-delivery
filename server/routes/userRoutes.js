const express = require("express");
const userRoutes = express.Router();
const { User } = require("../models");

userRoutes.post("/create", createUser);
userRoutes.get("/:id", getUserById);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;
