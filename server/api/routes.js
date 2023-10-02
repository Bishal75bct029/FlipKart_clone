const express = require('express');
const userSignUp = require('../controller/userSignUp.js')
const login = require('../controller/login.js');
const {fetchProduct,fetchSingleProduct, deleteProducts, fetchProductBySeller, updateProduct} = require('../controller/fetchProduct.js');
const isAuth = require('../middlewares/authentication.js');
const {forgetPassword,resetPassword, passwordChanged} = require('../controller/forgotPassword.js');
const { postProduct } = require('../controller/postProduct.js');
const { createOrder, getOrders, changeOrderStatus, deleteOrder } = require('../controller/createOrder.js');
const { AddToCart, getCartData, deleteCart } = require('../controller/addToCart.js');
const { searchProducts, filterProducts, sortProducts } = require('../controller/searchProduct.js');
const { validateLogin } = require('../controller/initialLoginValidation.js');
const getProductByCategories = require('../controller/categories.js');
const { getBackendOrders } = require('../controller/getOrdersBackend.js');

const router = express.Router();

router.post('/',validateLogin);

router.get('/getProducts',fetchProduct);
router.get('/getProduct/:id?',fetchSingleProduct)

router.get('/forget_password',forgetPassword);
router.get('/reset_password',resetPassword);
router.get('/search',filterProducts)
router.get('/sortProducts',sortProducts)
router.get('/getUsers',userSignUp.getUsers)
router.get('/getSellerProducts/',isAuth,fetchProductBySeller)
router.get('/product_by_category',getProductByCategories)
router.get('/cart_data',isAuth,getCartData)
router.get('/get_orders',isAuth,getOrders);
router.get('/backend_orders',isAuth,getBackendOrders);

router.post('/password_changed',passwordChanged);
router.post('/signup',userSignUp.createUser);
router.post('/login',login);
router.post('/post_product',isAuth,postProduct);
router.post('/send_order/',isAuth,createOrder);
router.post('/cart/:id?',isAuth,AddToCart);

router.put('/change_order_status/:id',isAuth,changeOrderStatus)
router.put('/updateProduct/:id',isAuth, updateProduct)

router.delete('/deleteProduct/:id',isAuth,deleteProducts);
router.delete('/deleteUser/:id',isAuth,userSignUp.deleteUsers)
router.delete('/delete_cart/:id',deleteCart)
router.delete('/delete_order/:id',isAuth,deleteOrder);

module.exports = router;