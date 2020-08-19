const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema =  new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    type: {type:Array, default: [], required: true},
    author: {type: String, required: true},
    oldPrice: {type: Number, required: true},
    newPrice: {type: Number, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema, 'products');