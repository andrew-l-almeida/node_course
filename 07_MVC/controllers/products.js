const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {title: 'Add Product', path:'/admin/add-product', activeAddProduct: true, formsCSS: true, productCSS: true})
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => { 
    Product.fetchAll((products) =>{
        res.render('shop', {prods: products, title: 'Shop', path: '/', hasProducts:products.length > 0, activeShop: true, productCSS: true})
    })
}