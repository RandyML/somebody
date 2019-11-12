const express = require('express');
const path =require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection= require('express-myconnection');

const app = express();

const adminroutes=require('./routes/admins');


//configuracion//
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middle
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'sistema'
},'single'));
app.use(express.urlencoded({extended:false})); 



//rutas
app.use('/',adminroutes);
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
    console.log('si jalo');
});
