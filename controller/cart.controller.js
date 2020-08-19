const Session = require('../models/session.model');

module.exports = {
    carts: function(req, res, next) {
        res.render('cart/carts');
    },

    addCard: async function(req, res, next) {
        var sessionId = req.signedCookies.sessionId;
        var id = req.params.id;
        
        let sessions = await Session.findOne( {"sessionId": sessionId} );
        let carts = sessions.carts;
        let idCarts = [];
        let number = 1;

        for (let cart of carts) {
            idCarts.push(cart.id);
            if (cart.id === id) {
                number = cart.number + 1;
            }
        }

        if (idCarts.indexOf(id) !== -1) {
            Session.update(
                {"sessionId": sessionId, "carts.id": id},
                { "$set": { "carts.$.number": number } },
                function(err, docs) {
                    if (err) throw err;
                }
            );
        } else {
            Session.update(
                {"sessionId": sessionId},
                { "$push": { "carts": {"id": id, "number": number} } },
                function(err, docs) {
                    if (err) throw err;
                }
            );
        }

        res.redirect('/');
    },

    updateCart: function(req, res, next) {
        let sessionId = req.signedCookies.sessionId;
        let id = req.params.id;
        let value = req.body.value;
        Session.update(
            {"sessionId": sessionId, "carts.id": id},
            {"$set": {"carts.$.number": value}},
            function(err, docs) {
                if (err) throw err;
            } 
        );
    }
}