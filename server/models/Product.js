const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    proStatus: { type: String },
    price:{ type: String },
    delivery:{ type: String },
})

module.exports = mongoose.model('Product', schema)