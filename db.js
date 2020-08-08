const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const products = require('./seed/product.seed');
const topsales = require('./seed/topsale.seed');
const newphones = require('./seed/newphone.seed');

console.log(products);

const adapter = new FileSync('db.json');
const db = lowdb(adapter);

//set default database:
db.defaults({products: products}).write();
db.defaults({topsales: topsales}).write();
db.defaults({newphones: newphones}).write();
module.exports = db;