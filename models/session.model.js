const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    sessionId: {
        type: String,
        required: true
    },
    carts: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Session', sessionSchema, 'sessions');