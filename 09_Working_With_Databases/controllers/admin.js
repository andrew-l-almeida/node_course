const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {title: 'Add Product', 
    path:'/admin/add-product', 
    editing: false 
    })
};

exports.postAddProduct = async (req, res, next) => {
    try{
        const title = req.body.title;
        const imageURL = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;

        const product = new Product(null, title, imageURL, description, price)
        await product.save()

        await res.redirect('/');
    }catch(err){
        console.log(err)
    }
};

exports.getEditProduct = async (req, res, next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/')
    }
    const prodId = req.params.productId;
    const product = await Product.findById(prodId);
    if(!product){
        return res.redirect('/')
    }
    await res.render('admin/edit-product', {
        title: 'Add Product', 
        path:'/admin/edit-product', 
        editing: editMode,
        product: product
    })
};

exports.postEditProducts = (req, res, next) =>{
    const prodId = req.body.productId
    const updatedTitle = req.body.title
    const updatedImageUrl = req.body.imageUrl
    const updatedPrice = req.body.price
    const updatedDescription = req.body.description

    const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice)

    updatedProduct.updateProduct()
    res.redirect('/admin/products')
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.fetchAll()
    await res.render('admin/products', {
        prods: products, 
        title: 'Admin Products', 
        path: '/admin/products', 
    })
};

exports.postDeleteProduct = async (req, res, next) =>{
    await Product.deleteById(req.body.productId)
    await res.redirect('/admin/products')
}