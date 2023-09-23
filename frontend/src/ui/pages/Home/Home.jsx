import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Space from "../../components/Space";
import UsernameProvider from "../../../usecontext/UsernameProvider";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../../redux/actions/getProducts";
import axios from "axios";

import Slide from "./components/Slide";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../../redux/constants/userLogin";
import { loginCredentials } from "../../../redux/reducers/loginCredentials";
import Footer from "../../components/Footer";
  
const Home = () => {
  
  const {productsData} = useSelector((state) => state.getProducts);
  useEffect(()=>{
    const validateLogin =async()=>{

      if(localStorage.getItem('token')===null){
        dispatch({type:LOGIN_FAILURE})
        return
      }
      try{
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization':`${token}`
        }
        const checkLogin = await axios.post('http://localhost:8000/',null,{headers:headers})
        console.log("love you")
        console.log(checkLogin.data)
        dispatch({type:LOGIN_SUCCESS,payload:checkLogin.data.token})
        
      }catch(error){
        console.log('error',error);
        return
      }
    }
    validateLogin();
  },[])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch ]); 


  // console.log(productsData); 

  // console.log(states)
  return (
    <div>
      <Navbar />
      <Categories />
      <Space>
        <Banner />
      </Space>
      <Space>
        {/* <Typography>Hi</Typography> */}
        <Slide products={productsData} title ="Best of Electronics" />
      </Space>
      <Space>
        <Slide products={productsData} title ="Beauty, Food, Toys and more"/>
      </Space>
      <Space>
        <Slide products={productsData} title ="Gift for Your Loved Ones"/>
      </Space>
      <Footer/>
    </div>
  );
};

export default Home;
