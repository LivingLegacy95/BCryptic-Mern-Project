const CryptoController = require("../controllers/crypto.controllers")

module.exports = (app) =>{
    app.get("/api/coins/list", CryptoController.allAltcoin)
    app.get("/api/simple/supported_vs_currencies", CryptoController.AltcoinCurrency)
    app.get("/api/coins/:id/history", CryptoController.altCoinHistory)
    app.get("/api/coins/:id", CryptoController.oneAltcoin)
    app.delete("/api/coins/:id", CryptoController.deleteAltcoin)
}