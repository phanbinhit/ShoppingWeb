const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const products = require('./seed/product.seed');

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

//set default database:
db.defaults({products: products}).write();
module.exports = db;