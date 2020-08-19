const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.get('/:id', productController.getSingleProduct);

module.exports = router;