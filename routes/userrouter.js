const UserController = require('../controller/UserController');
const productcontroller=require('../controller/ProductController');
const express = require('express')
const router = express.Router();
console.log('hello there i am in router');

router.post('/login', UserController.login);
router.post('/register', UserController.Register);
router.get('/users',UserController.getusers);
router.post('/feedback',UserController.addfeedback);
router.post('/payment',UserController.payment);

module.exports = router;
