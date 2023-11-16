const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
    coinName:{
        type: String,
        required:[true, "Coin must have an name"]
    },

    currency:{
        type: String,
        required:[true, "Choose your currency"]
    },
})

module.exports = mongoose.model('Crypto', CryptoSchema);