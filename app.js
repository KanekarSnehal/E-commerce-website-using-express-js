const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const path=require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const errorController=require('./controllers/error');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//to handle error page
// app.use(errorController.get404);
    
app.listen(9000);