const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');

router.get('/', cartController.carts);
router.get('/add/:id', cartController.addCard);
router.post('/update/:id', cartController.updateCart);
module.exports = router;