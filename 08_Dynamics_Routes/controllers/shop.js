const Product = require('../models/product')

exports.getProducts = (req, res, next) => { 
    Product.fetchAll((products) =>{
        res.render('shop/product-list', {
            prods: products, 
            title: 'All Products', 
            path: '/products', 
        })
    })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {product: product, title: 'Product Detail', path:'/products'})
    })
}   

exports.getIndex = (req, res, next) =>{
    Product.fetchAll((products) =>{
        res.render('shop/index', {
            prods: products, 
            title: 'Shop', 
            path: '/', 
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart',{
        path: '/cart',
        title: 'You Cart'
    })
}

exports.getCheckkout = (req, res, next) => {
    res.render('shop/cart',{
        title: 'Checkout',
        path: '/checkout'
    })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        title: 'Orders',
        path: '/Orders'
    })
}