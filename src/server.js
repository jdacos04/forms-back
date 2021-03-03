const express = require('express');
const path = require('path');
const morgan =require('morgan');
const multer = require('multer');
const session = require('express-session');
const passport=require('passport')
const pug =require('pug');


//incializacion 
const app =  express();
require('./config/passport');
//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname , 'views'));
app.set('view engine', 'pug');

//midelwares 
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(express.json());
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());




//variables globales 


//rutas
app.use(require('./routes/index.routes'));



//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static(path.join(__dirname, "../public")));

module.exports = app;