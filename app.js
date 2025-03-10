const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const myConnection = require('express-myconnection');
const app = express();
const indexRoutes = require('./routes/index.routes');

// Configuración de MySQL
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Novato2201#',
    port: 3306,
    database: 'nodelogin'
}, 'single'));

// Configuración de bodyParser para parsear cuerpos de solicitud
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de sesiones
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Rutas
app.use('/', indexRoutes);

app.get('/', (req, res) => {
    if (req.session.loggedin) {
        let name = req.session.name;
        res.render('home', { name });
    } else {
        res.redirect('/login');
    }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejo básico de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});
