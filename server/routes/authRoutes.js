const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {signUp,signIn} = authController;

router.post('/signup',signUp);
router.post('/signin', signIn);



module.exports = router;