const express = require('express');
const userSignUp = require('../controller/userSignUp.js')
const login = require('../controller/login.js');
const {fetchProduct,fetchSingleProduct, deleteProducts, fetchProductBySeller, updateProduct} = require('../controller/fetchProduct.js');
const isAuth = require('../middlewares/authentication.js');
const {forgetPassword,resetPassword, passwordChanged} = require('../controller/forgotPassword.js');
const { postProduct } = require('../controller/postProduct.js');
const { createOrder } = require('../controller/createOrder.js');
const { AddToCart } = require('../controller/addToCart.js');
const { searchProducts, filterProducts, sortProducts } = require('../controller/searchProduct.js');
const { validateLogin } = require('../controller/initialLoginValidation.js');

const router = express.Router();

router.post('/',validateLogin);

router.get('/getProducts',fetchProduct);
router.get('/getProduct/:id?',fetchSingleProduct)

// router.post('/try',(request,response)=>{
//     console.log(request.files)
//     console.log(request.body,'i am the body')
// })

router.get('/forget_password',forgetPassword);
router.get('/reset_password',resetPassword);
router.get('/search',filterProducts)
router.get('/sortProducts',sortProducts)
router.get('/getUsers',userSignUp.getUsers)
router.get('/getSellerProducts/',isAuth,fetchProductBySeller)

router.post('/password_changed',passwordChanged);
router.post('/signup',userSignUp.createUser);
router.post('/login',login);
router.post('/post_product',isAuth,postProduct);
router.post('/order/:id?',isAuth,createOrder);
router.post('/cart/:id?',isAuth,AddToCart);

router.put('/updateProduct/:id',isAuth, updateProduct)

router.delete('/deleteProduct/:id',isAuth,deleteProducts);
router.delete('/deleteUser/:id',isAuth,userSignUp.deleteUsers)

module.exports = router;