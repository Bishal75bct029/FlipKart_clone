import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Background from "./Background";
import Navbar from "../../components/Navbar";
import CartBody from "./CartBody";
import { LOGIN_SUCCESS } from "../../../redux/constants/userLogin";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EmptyCart from "./EmptyCart";
import OrderForm from "./OrderForm";
import { ADDED_TO_CART } from "../../../redux/constants/cart";
import { useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [isloaded,setIsLoaded] = useState(0);
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const [loading,setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cart_data`, {
          headers: { Authorization: loginCredentials.token },
        });
        console.log(response.data.cartItems, "gaddi");
        dispatch({ type: ADDED_TO_CART, payload: response.data.cartItems });
        console.log(cart, "rastey se");
        setIsLoading('loaded')
      } catch (error) {
        setIsLoading('notloaded')
      }
    };
    fetchCart();
  }, [loginCredentials]);
  useEffect(()=>{
    if(loginCredentials.role === 'buyer'){
      
    }else if(loginCredentials.role !== 'buyer' && isloaded !== 0){
      console.log(loginCredentials.role)
      navigate('/')
    }
    setIsLoaded(1);
    console.log(isloaded,'kiki') 
  },[loginCredentials,isloaded])
  return (
    <>
    {
      loginCredentials.role !== 'buyer' ?<></>:
    <Background>
      <Navbar />
      {
        loading ?
        <Box>{cart.length !== 0 ? <CartBody /> : <EmptyCart />}</Box>
        :<></>
      }
    </Background>
    }
    </>
  );
};

export default Cart;
