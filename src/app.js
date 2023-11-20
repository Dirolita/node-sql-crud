const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();


// 1: Opteniendo puerto
app.set('port',4000);

app.listen(app.get('port'), ()=>{
    console.log('listening on port', app.get('port'));
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SQL.2023',
    database: 'inventario_p' // Nombre de tu base de datos
  });
