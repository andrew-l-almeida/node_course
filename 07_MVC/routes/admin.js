const path = require('path');

const express = require('express');

const productsControllers = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsControllers.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControllers.postAddProduct);

module.exports = router