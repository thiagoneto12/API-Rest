const bodyParser = require('body-parser');
const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.json());

//Middlewares
app.use(cors());
app.use(express.json());

//Imports Routes
const postRoute = require('./routes/posts');

app.use('/post', postRoute);

//ROUTES
app.get('/',(re, res) =>{
    res.send('Nos estamos na Home');
});

app.get('/post',(re, res) =>{
    res.send('Nos estamos na Home');
});

//Conexão com o Banco de dados
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Conectado ao Banco! ')
);

//Configurando a porta do localhost 
app.listen(3000);
 