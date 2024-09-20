const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const saltRounds = 10;

dotenv.config();
module.exports = {
  signUp: async (req, res) => {
    console.log("signUp");
    try {
      const { email, password, role, name, location } = req.body;
      console.log(req.body);
      if (!email || !password || !role || !name) {
        return res
          .status(400)
          .json({ message: "Email, password, role and name are required" });
      }

      // Check if the email is already used in either User or Seller model
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);
      let newUser;
      if (
        role === "customer" ||
        role === "restaurant_owner" ||
        role === "driver"
      ) {
        newUser = await User.create({
          email,
          password: hashedPassword,
          role,
          name,
          location,
        });
      } else {
        return res.status(400).json({ message: "Invalid role specified" });
      }

      res.status(201).json({
        message: "Account created successfully",
      });
    } catch (error) {
      console.error("Error creating account:", error);
      res
        .status(500)
        .json({ message: "Error creating account", error: error.message });
    }
  },

  signIn: async (req, res) => {
    console.log("signIn");
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      res.status(200).json({
        message: "User signed in successfully",
        token,
        user: { id: user.id, email: user.email, role: user.role },
      });
    } catch (error) {
      console.error("Error signing in user:", error);
      res
        .status(500)
        .json({ message: "Error signing in user", error: error.message });
    }
  },
  me: async (req, res) => {
    const { id } = req.user;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          location: user.location,
        },
      });
    } catch (error) {
      console.error("Error fetching user:", error);

      res
        .status(500)
        .json({ message: "Error fetching user", error: error.message });
    }
  },
};
