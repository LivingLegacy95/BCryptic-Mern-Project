- [ ] create a server folder and server.js file [server](server/server.js)
- [ ] create folders for application logic:
```bash
cd server
mkdir controllers configs models routes
```
- [ ] run the following command to initialize project:

``` bash
npm init -y
```

- [ ] run following commands to install express and dependendcies

``` bash
npm i express dotenv mongoose cors
```

- [ ] create folder structure
- [ ] in server.js:
- [ ] import all dependencies

``` bash
const express = require("express);
const app = express();
```
- [ ] Configure express:

``` bash
app.use(express.json());
app.use(express.urlenconded({extended: true}))
```

- [ ] routes and controllers logic (CRUD) make sure to comment out until routes are created

``` bash
const Router = require(.routes/"")
Router(app);
```

- [ ] Listen to the port

```bash
app.listen(8000, ()=>console.log(`Listening on port: 8000`));
```

- [ ] Run application to see if port is open

```bash
nodemon server.js
```

- [ ] create a file to store sensitive information [.env](server/.env) - env file stores username and password for mongoDB
- [ ] create a .gitignore file to ignore information in env and node_modules [.gitignore](.gitignore)
- [ ] import dotenv into server.js 

``` bash
require('dotenv').config();
```

- [ ] Connect to database:
- [ ] create file inside configs folder [mongoose.config.js](configs/mongoose.config.js)
- [ ] import mongoose

```bash 
const mongoose = require('mongoose); 
```

- [ ] connect to cloud database and grab url to connect to database and place it in config.js
``` bash
const uri = `mongodb+srv://${username}:${pw}@cluster0.8oaqdty.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
```

- [ ] import username and password to config.js
```bash 
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
```

- [ ] import mongoose.configs file to server.js
```bash
require('./configs/mongoose.config')
```

- [ ] install dependencies for front end

```bash
npm i axios react-router-dom
```