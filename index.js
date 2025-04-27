const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));

require('dotenv').config();
require('./db/connection');
const nav=[{
    link:'/basic',name:'Home'
},{
     link:'/basic/addform',name:'Add employees'
}
]


app.set('view engine','ejs');
app.use(express.static('public'));
app.set("views",__dirname+'/view');
const routes=require('./routes/employeeRoutes')(nav);
app.use('/basic',routes);


app.listen(5000,()=>{
    console.log('server running on PORT ' );
})