const Product = require('../models/product.model'); 

module.exports = {
    index: async function(req, res, next) {
        var products = await Product.find();
        var topsales = [];
        var newphones = [];
        for (var i = 0; i < products.length; i++) {
            if (products[i].type.indexOf(1) !== -1) {
                topsales.push(products[i]);
            }
    
            if (products[i].type.indexOf(2) !== -1) {
                newphones.push(products[i]);
            }
        }
        res.render('admin/index', {products: products, topsales: topsales, newphones: newphones});
    }
}