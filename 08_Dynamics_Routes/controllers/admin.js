const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {title: 'Add Product', 
    path:'/admin/add-product', 
    activeAddProduct: true, 
    formsCSS: true, 
    productCSS: true
})
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product(title, imageURL, description, price)
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products, 
            title: 'Admin Products', 
            path: '/admin/products', 
        })
    })
}