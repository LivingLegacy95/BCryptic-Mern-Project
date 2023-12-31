const mongoose = require('mongoose');
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbName = process.env.ATLAS_DB

// connect to cloud database and grab url provided by MongoDB UI
const uri = `mongodb+srv://${username}:${pw}@cluster0.8oaqdty.mongodb.net/${dbName}?retryWrites=true&w=majority`

console.log(uri)

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));