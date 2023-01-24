const Product = require('../models/product')
const Cart = require('../models/cart')

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
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = []
            for(product of products){
                const cartProductData = cart.products.find(prod => prod.id === product.id)
                if(cartProductData){
                    cartProducts.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart',{
                path: '/cart',
                title: 'You Cart',
                products: cartProducts
            })
        })
    })
}
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price)
    })
    res.redirect('/cart')
}
exports.postDeleteCartProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price)
        res.redirect('/cart')
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