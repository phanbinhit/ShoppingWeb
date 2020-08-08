const shortid = require('shortid');
const Product = require('../models/product');

topSales = [
    new Product(shortid.generate(), "./images/assets/products/s1.png", "Samsung Galaxy 10", "Samsung" ,152),
    new Product(shortid.generate(), "./images/assets/products/s2.png", "Samsung Galaxy X", "Samsung", 152),
    new Product(shortid.generate(), "./images/assets/products/i1.png", "Iphone X", "Apple", 152),
    new Product(shortid.generate(), "./images/assets/products/i2.png", "Iphone X Plus", "Apple", 152),
    new Product(shortid.generate(), "./images/assets/products/r5.png", "Redmi Note 9", "Redmi", 152),
    new Product(shortid.generate(), "./images/assets/products/r6.png", "Redmi Note X", "Redmi", 152),
    new Product(shortid.generate(), "./images/assets/products/r7.png", "Redmi Note 7 Pro", "Redmi", 152),
];

module.exports = topSales;