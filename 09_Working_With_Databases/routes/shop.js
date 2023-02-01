const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts)
router.get('/products/:productId', shopController.getProduct) // ":" means that we expect a variable in the URL
router.get('/cart', shopController.getCart)
router.post('/cart', shopController.postCart)
router.get('/orders', shopController.getOrders)
router.get('/checkout', shopController.getCheckkout)
router.post('/cart-delete-item', shopController.postDeleteCartProduct)
router.post('/create-order', shopController.postOrder)

module.exports = router;
