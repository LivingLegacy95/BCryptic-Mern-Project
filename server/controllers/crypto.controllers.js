const Crypto = require("../models/crypto.model")


// All AltCoins
module.exports.AllCrypto = (req, res) =>{
    Crypto.find()
    .then(cryptoList => res.json(cryptoList))
    .catch(err=>res.status(400).json(err))
}