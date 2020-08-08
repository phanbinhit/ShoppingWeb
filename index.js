const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//set static link
app.use(express.static("public"));
app.use(express.static("views"));

app.get('/product/:id', function(req, res) {
    var id = req.params.id
    var product = db.get('products').find({ id: id }).value();
    res.render('products/product', {product: product});
})

app.get('/', function(req, res) {
    var topsales = [];
    var newphones = [];
    var products = db.get('products').value();
    for (var i = 0; i < products.length; i++) {
        if (products[i].type.indexOf(1) !== -1) {
            topsales.push(products[i]);
        }

        if (products[i].type.indexOf(2) !== -1) {
            newphones.push(products[i]);
        }
    }
    console.log(newphones);
    res.render('index', {products: products, topsales: topsales, newphones: newphones});
});

app.listen(3000, function() {
    console.log("Listening server in port 3000");
});