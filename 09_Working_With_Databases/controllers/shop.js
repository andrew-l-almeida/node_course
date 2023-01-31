const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = async (req, res, next) => {
    try{
        const products = await Product.findAll()
        await res.render('shop/product-list', {
                prods: products, 
                title: 'Shop', 
                path: '/products', 
        })
    }catch(err){
        console.log(err)
    }
}

exports.getProduct = async (req, res, next) => {
    try{
        const prodId = req.params.productId
        const product = await Product.findByPk(prodId)
        await res.render('shop/product-detail', {product: product, title: 'Product Detail', path:'/products'});
    }catch(err){
        console.log(err)
    }
}   

exports.getIndex = async (req, res, next) =>{
    try{
        const products = await Product.findAll()
        await res.render('shop/index', {
                prods: products, 
                title: 'Shop', 
                path: '/', 
        })
    }catch(err){
        console.log(err)
    }
}

exports.getCart = (req, res, next) => {
    req.user.getCart().then(cart => {
        cart.getProducts().then(products => {
            res.render('shop/cart',{
                path: '/cart',
                title: 'You Cart',
                products: products
            })
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
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


