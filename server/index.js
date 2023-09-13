const express = require('express');
const {database} = require('./database/db.js');
const bodyParser = require('body-parser')
const userSignUp = require('./controller/userSignUp.js')
const cors = require('cors');
const login = require('./controller/login.js');
const fetchProduct = require('./controller/fetchProduct.js');
const isAuth = require('./middlewares/authentication.js');
const {forgetPassword,resetPassword, passwordChanged} = require('./controller/forgotPassword.js');
const { postProduct } = require('./controller/postProduct.js');
const { createOrder } = require('./controller/createOrder.js');
const { AddToCart } = require('./controller/addToCart.js');


database()
const app = express();
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
  });

  
app.use(cors());
  
app.use(bodyParser.json({extended:true}));

app.get('/getProducts',fetchProduct.fetchProduct);
app.get('/getProduct/:id?',fetchProduct.fetchSingleProduct)

app.get('/check',isAuth,(request,response)=>{
    response.status(200).json({message:"You are authenticated"});
})

app.get('/forget_password',forgetPassword);
app.get('/reset_password',resetPassword);
app.post('/password_changed',passwordChanged);
app.post('/signup',userSignUp);
app.post('/login',login);
app.post('/post_product',postProduct);
app.post('/order/:id?',isAuth,createOrder);
app.post('/cart/:id?',isAuth,AddToCart);

app.listen(8000,()=>{
    console.log("Server Started Successfully");
})