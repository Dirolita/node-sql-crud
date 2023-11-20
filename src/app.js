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

//2: Establecer coneccion con la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SQL.2023',
    database: 'inventario_p' // Nombre de tu base de datos
  });

//3: Configurando vistas

app.set('views', __dirname + '/views')
app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('views engine','hbs');

//4: Definir ruta principal

app.get('/',(req,res)=>{
    res.render('home')
})