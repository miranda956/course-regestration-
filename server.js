const express=require('express');
const bodyparser=require('body-parser');
const methodoverride=require('method-override');
const logger=require('morgan');
const cookieparser=require('cookie-parser');
const session=require('express-session');
const path =require('path');
const exphbs=require('express-handlebars');
const passport =require("passport-local");
const morgan =require("morgan");

const db =require('./models');

// intializing an instance of express
const app= express();

app.use(cookieparser());
app.use(methodoverride("_method"));
app.use(logger("dev"));
app.use(session({
    secret:'123456',
    resave:true,
    saveUninitialized:true
}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars');
 
app.use(express.static(path.join(__dirname,'views')));

db.sequelize.sync({force:false}).then(()=>{
    const port = process.env.PORT || 5000;
    app.listen(port,()=> 
     console.log(`Server running on port ${port} 🔥`)); 
 }).catch((err)=>{
     console.log(err)
 });
 
     