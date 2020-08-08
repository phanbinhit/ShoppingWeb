const express = require('express');
const app = express();
const db = require('./db');
//set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//set static link
app.use(express.static("public"));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.render('index', {products: db.get('products').value(), topsales: db.get('topsales').value(), newphones: db.get('newphones').value()});
})

app.listen(3000, function() {
    console.log("Listening server in port 3000");
})