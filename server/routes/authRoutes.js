const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {signUp,signIn,me} = authController;

router.post('/signup',signUp);
router.post('/signin', signIn);
router.get('/me', me);




module.exports = router;