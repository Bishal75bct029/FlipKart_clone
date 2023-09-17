const express = require('express');
const userSignUp = require('../controller/userSignUp.js')
const login = require('../controller/login.js');
const {fetchProduct,fetchSingleProduct} = require('../controller/fetchProduct.js');
const isAuth = require('../middlewares/authentication.js');
const {forgetPassword,resetPassword, passwordChanged} = require('../controller/forgotPassword.js');
const { postProduct } = require('../controller/postProduct.js');
const { createOrder } = require('../controller/createOrder.js');
const { AddToCart } = require('../controller/addToCart.js');
const { searchProducts, filterProducts, sortProducts } = require('../controller/searchProduct.js');

const router = express.Router();

router.get('/getProducts',fetchProduct);
router.get('/getProduct/:id?',fetchSingleProduct)

// router.get()

router.get('/forget_password',forgetPassword);
router.get('/reset_password',resetPassword);
router.get('/search',filterProducts)
router.get('/sortProducts',sortProducts)
router.post('/password_changed',passwordChanged);
router.post('/signup',userSignUp);
router.post('/login',login);
router.post('/post_product',postProduct);
router.post('/order/:id?',isAuth,createOrder);
router.post('/cart/:id?',isAuth,AddToCart);

module.exports = router;