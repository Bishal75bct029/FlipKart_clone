import React, { useEffect, useState } from 'react'
import Order from './Order'
import { Box } from '@mui/material'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { RESET_CART_TOAST } from '../../../redux/constants/cartToast'
import { useNavigate, useNavigation } from 'react-router'

const Buyer = () => {
  const cartToast = useSelector(state=>state.cartToast)
  const [count,setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isloaded,setIsLoaded] = useState(0);
  const loginCredentials = useSelector(state=>state.loginCredentials);

  useEffect(() => {
    if (cartToast.order === "success") {
      console.log(cartToast,'kkkkk jjjjj');
      setCount(count + 1)
      if(count %2 == 0){

        console.log("hello order");
        toast.success("Order placed successfully", { autoClose: 2000 });
      }


   
    }
    if(cartToast.order || cartToast.cart){
      
      dispatch({type:RESET_CART_TOAST})
    }
    console.log(cartToast)
  }, [cartToast]);

  useEffect(()=>{
     if(loginCredentials.role !== 'buyer'){
      setIsLoaded(isloaded=>isloaded +1)
      if(isloaded ===6 ){

        navigate('/');
      }
      console.log(loginCredentials,'hi haha');
      
    }
    
    console.log(isloaded,'kiki');
  },[loginCredentials,isloaded])
  return (
    <>
      <Navbar/>
    {loginCredentials.role !== 'buyer' ? <Box></Box>:
    <Box>
      <ToastContainer/>
    <Order/>  
    
    </Box>
    }
    </>
  )
}

export default Buyer