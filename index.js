require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRoute = require('./router/index.route');
const productRoute = require('./router/product.route');
const authRoute = require('./router/auth.route');
const cardRoute = require('./router/cart.route');
const sessionMiddelware = require('./middelwares/session.middleware');
const cookieParser = require('cookie-parser'); 
const path = require('path');
const app = express();


//connect mongdb
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function() {
        console.log("Connected mongodb");
    })
    .catch(function(err) {
        console.log(err);
    });

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddelware);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//set static link
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static(path.resolve('./db.js')));
app.use(express.static(__dirname + ""));
app.use('/', indexRoute);
app.use('/product', productRoute);
app.use('/cart', cardRoute);

app.listen(3000, function() {
    console.log("Listening server in port 3000");
});