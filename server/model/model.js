//SCHEME
const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    //shape of document
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

// name , shape
const userdb = mongoose.model("userdb", scheme)

module.exports = userdb