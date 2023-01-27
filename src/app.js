const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const rutasTarea = require('./routes/tareas');

const app = express();
app.set('port', 4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnodejs'
}));

app.listen(app.get('port'), () => {
    console.log("Aplicación corriendo en el puerto: " + app.get('port'));
});

app.use('/', rutasTarea);

app.get('/', (req, res) => {
    res.render('home');
})