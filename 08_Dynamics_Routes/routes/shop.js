const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts)
router.get('/products/:productId', shopController.getProduct) // ":" means that we expect a variable in the URL
router.get('/cart', shopController.getCart)
router.get('/orders', shopController.getOrders)
router.get('/checkout', shopController.getCheckkout)

module.exports = router;
