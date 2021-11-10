const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//crear conexion a la bd con sequelize
const db = require('./config/db');

//Importar el modelo
require('./models/Users');
require('./models/Persons');
require('./models/Childs');
db.sync()
    .then(() => console.log('Conectado al servidor de BD'))
    .catch((error) => console.log(error));

const app = express();
const port = 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
 
// parse application/json
app.use(express.json());

app.use(routes);

app.listen(port);