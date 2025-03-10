const mysql =  require('mysql');
const session =  require('express-sesion');
const bodyParse = require('body-parser');
const { application } = require('express');
const { get } = require('../routes/index.routes.js');



application.use(myconnection(mysql, {
   host: 'localhost',
   user: 'root',
   password: 'Novato2201#',
   port: 3306,
   database: 'taller3m'



}, 'single'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));

app.listen(app.get('port'), () => {
    console.log('listening on port ', app.get('port'));

});

app.use('/', loginRoutes);

app.get('/', (req, res) => {
   if (req.session.loggedin) {
    let name = req.session.name;

    res.render('home' , { name });
   } else {

    
    res.redirect('/login');
   
   }

});

   