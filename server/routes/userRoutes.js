const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');




router.get("/get/profile", authMiddleware, userController.getProfile);
router.put("/put/profile", authMiddleware, userController.updateProfile);
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


module.exports = router;
