const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    try{
        res.render('admin/edit-product', {title: 'Add Product', 
        path:'/admin/add-product', 
        editing: false 
        })
    }catch(err){
        console.log(err)
    }
};

exports.postAddProduct = async (req, res, next) => {
    try{
        const title = req.body.title;
        const imageURL = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;
        
        Product.create({
            title: title,
            imageUrl: imageURL,
            description: description,
            price: price
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        })
    
        await res.redirect('/');
    }catch(err){
        console.log(err)
    }
};

exports.getEditProduct = async (req, res, next) => {
    try{
        const editMode = req.query.edit;
        if(!editMode){
            return res.redirect('/')
        }
        const prodId = req.params.productId;
        const product = await Product.findByPk(prodId);
        if(!product){
            return res.redirect('/')
        }
        await res.render('admin/edit-product', {
            title: 'Add Product', 
            path:'/admin/edit-product', 
            editing: editMode,
            product: product
        })
    }catch(err){
        console.log(err)
    }
};

exports.postEditProducts = async (req, res, next) =>{
    try{
        const prodId = req.body.productId
        const updatedTitle = req.body.title
        const updatedImageUrl = req.body.imageUrl
        const updatedPrice = req.body.price
        const updatedDescription = req.body.description
        
        await Product.update({
            title: updatedTitle,
            imageUrl: updatedImageUrl,
            price: updatedPrice,
            description: updatedDescription
        },{
            where:{
                id: prodId
            }
        })
        res.redirect('/admin/products')
    }catch(err){
        console.log(err)
    }
}

exports.getProducts = async (req, res, next) => {
    try{
        const products = await Product.findAll()
        await res.render('admin/products', {
                prods: products, 
                title: 'Shop', 
                path: '/admin/products', 
                editing: false
        })
    }catch(err){
        console.log(err)
    }
};

exports.postDeleteProduct = async (req, res, next) =>{
    try{
        await Product.destroy({where:{
            id: req.body.productId
        }})
        await res.redirect('/admin/products')
    }catch(err){
        console.log(err)
    }
}