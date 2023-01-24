const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {title: 'Add Product', 
    path:'/admin/add-product', 
    editing: false 
    })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageURL = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product(null, title, imageURL, description, price)
    product.save()
    res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/')
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if(!product){
            return res.redirect('/')
        }
        res.render('admin/edit-product', {
            title: 'Add Product', 
            path:'/admin/edit-product', 
            editing: editMode,
            product: product
        })
    });
    
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) =>{
        res.render('admin/products', {
            prods: products, 
            title: 'Admin Products', 
            path: '/admin/products', 
        })
    })
};

exports.postEditProducts = (req, res, next) =>{
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedImageUrl = req.body.imageUrl
    const updatedPrice = req.body.price
    const updatedDescription = req.body.description

    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice)

    updatedProduct.save()
    res.redirect('/admin/products')
}

exports.postDeleteProduct = (req, res, next) =>{
    Product.deleteById(req.body.productId)
    res.redirect('/admin/products')
}