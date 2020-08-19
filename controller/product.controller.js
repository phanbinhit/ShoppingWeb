const Product = require('../models/product.model');

module.exports = {
    getSingleProduct: async function(req, res, next) {
        var id = req.params.id
        var product = await Product.findById(id);
        res.render('products/product', {product: product});
    }
}