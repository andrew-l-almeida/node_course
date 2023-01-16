const path = require('path')
const fs = require('fs')

module.exports = class Product {
    constructor(title){
        this.title = title
    }

    save(){
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) =>{
            let products = []
            if(!err){
                 products = JSON.parse(fileContent);
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) =>{
                console.log(err)
            })
        });
    }

    static fetchAll(cb){
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) =>{
            if(err){
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
    }
}