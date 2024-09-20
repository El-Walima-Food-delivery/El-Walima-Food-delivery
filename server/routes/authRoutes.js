const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { signUp, signIn, me } = authController;
const authenticate = require("../middleware/authMiddleware");
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", authenticate, me);

module.exports = router;
