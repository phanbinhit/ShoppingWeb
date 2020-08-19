const shortid = require('shortid');
const Session = require('../models/session.model');
const Product = require('../models/product.model');

module.exports = async function(req, res, next) {
    var sessionId = req.signedCookies.sessionId;
    if (!sessionId) {
        sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {signed: true});
        Session.create({"sessionId": sessionId});
    }

    let sessions = await Session.findOne( {"sessionId": sessionId} );
    let carts = sessions.carts;
    let number = 0;
    for (let i = 0; i < carts.length; i++) {
        let product = await Product.findById(carts[i].id);
        carts[i] = {product: product, number: carts[i].number};
        number += parseInt(carts[i].number);
    }

    res.locals.number = number;
    res.locals.carts = carts;
    next();
}