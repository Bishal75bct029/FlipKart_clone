import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Space from "../../components/Space";
import UsernameProvider from "../../../usecontext/UsernameProvider";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../../redux/actions/getProducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import Slide from "./components/Slide";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../../redux/constants/userLogin";
import { loginCredentials } from "../../../redux/reducers/loginCredentials";
import Footer from "../../components/Footer";
import { filterProduct } from "../../features/functions/filterProducts";
import { LOGIN_FAILURE_TOASTIFY, LOGIN_SUCCESS_TOASTIFY, RESET_AUTH_TOAST } from "../../../redux/constants/authToast";
  
const Home = () => {
  const {productsData} = useSelector((state) => state.getProducts);
  const authToast = useSelector(state=>state.authToast);
  const [isProduct,setIsProduct] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  

   const [state,setState] = useState(0);
  useEffect(()=>{
    console.log(authToast,'idea')
    if(authToast.login === 'success'){  
      console.log(authToast,'haha  ')
      toast.success("Login Successful",{autoClose:2000}) 
      console.log("kina change vako timi");       
    }else if(authToast.login === 'logout'){
      toast.info('Logged Out Successfully',{autoClose:2000});
      console.log('Vaeau ra   ');
      

      
    } else if(authToast.login ==='fail'){
      toast.error("Login Failed");
      console.log("raja rani")  
    }
    if(authToast.login || authToast.signup){
      console.log("hero")

      dispatch({type:RESET_AUTH_TOAST})
    }
  },[authToast]);  
         
  useEffect(() => {
    dispatch(getProducts(setIsProduct));
  }, []);             

  
  return (
    <>
        <Navbar />
      {  isProduct ?
    <div>

      <Categories />
      <Space>
        <Banner />
      </Space>
      <Space>
        {/* <Typography>Hi</Typography> */}
        <Slide products={filterProduct(productsData,'electronics')} title ="Best of Electronics"category = {'electronics'} />
      </Space>
      <Space>
        <Slide products={filterProduct(productsData,'beauty')} title ="Beauty & Cosmetics"category = {'beauty'}/>
      </Space>
      <Space>
        <Slide products={filterProduct(productsData,'gifts')} title ="Gift for Your Loved Ones"category = {'gifts'}/>
      </Space>
      <Space>
        <Slide products={filterProduct(productsData,'fashion')} title ="Fashion & Design"category = {'fashion'}/>
      </Space>
      <Space>
        <Slide products={filterProduct(productsData,'mobile')} title ="Mobiles & Accessories"category = {'mobile'}/>
      </Space>
      <Space>
        <Slide products={filterProduct(productsData,'travel')} title ="Tour & Travels" category = {'travel'}/>
      </Space>
      <ToastContainer/>
      <Footer/>
    </div> : <></>
    }
      </>
  );
};

export default Home;
