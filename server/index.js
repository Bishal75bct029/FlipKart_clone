const express = require('express');
const {database} = require('./database/db.js');
const bodyParser = require('body-parser')
const userSignUp = require('./controller/userSignUp.js')
const cors = require('cors');
const login = require('./controller/login.js');
const fetchProduct = require('./controller/fetchProduct.js');


database()
const app = express();

  
app.use(cors());
  
app.use(bodyParser.json({extended:true}));

app.get('/getProducts',fetchProduct.fetchProduct);
app.get('/getProduct/:id?',fetchProduct.fetchSingleProduct)

app.post('/signup',userSignUp)
app.post('/login',login)

app.listen(8000,()=>{
    console.log("Server Started Successfully");
})