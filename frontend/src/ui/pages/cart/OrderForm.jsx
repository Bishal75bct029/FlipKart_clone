import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import axios from "axios";
import { loginCredentials } from "../../../redux/reducers/loginCredentials";
import {useDispatch, useSelector} from 'react-redux'
import { ADDED_TO_CART } from "../../../redux/constants/cart";
import { useNavigate } from "react-router";
import { ORDER_FAILED_TOAST, ORDER_SUCCESS_TOAST } from "../../../redux/constants/cartToast";

const OrderForm = ({ open, setOpen,setSuccess, }) => {
  const loginCredentials = useSelector(state=>state.loginCredentials);
  const cartToast = useSelector(state=>state.cartToast);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    shippingAddress: "",
    paymentStatus: "notPaid",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (Object.values(formData).length !== 2) {
      return;
    }
   
    console.log("Form data:", formData);
    try{

        await axios.post(`https://flip-kart-clone-9xew.vercel.app//send_order`,formData,{headers:{Authorization:loginCredentials.token}});
        dispatch({type:ORDER_SUCCESS_TOAST})
        setOpen(false); 
        setFormData({shippingAddress:"",paymentStatus:"notPaid"});
        try{

          const response = await axios.get(`https://flip-kart-clone-9xew.vercel.app//cart_data`,{headers:{Authorization:loginCredentials.token}})
          dispatch({type:ADDED_TO_CART,payload:response.data.cartItems});
        }catch(error){
          console.log(error)
        }
       
        navigate('/profile/buyer/order');
    }catch(error){
      dispatch({type:ORDER_FAILED_TOAST})
      console.log(loginCredentials.token,'token')
        console.log("kina vaenau tani",error);
    }
  };

  const handleDialogClose = () => {
    setOpen(false); 
  };

  useEffect(()=>{
    if(cartToast.order === 'failed'){
      toast.error("Failed to place order",{autoClose:2000})
    }
  },[cartToast])


  return (
    <>
    <ToastContainer/>
    <Dialog open={open} onClose={handleDialogClose} fullWidth maxWidth="sm">
      <DialogTitle>Order Form</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Shipping Address"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            margin="normal"
            required
            />

          <FormControl fullWidth margin="normal">
            <span style={{ color: "#878787", fontSize: 13, margin: "0 0 5px 0" }}>
              Payment Status
            </span>
            <Select
              id="paymentStatus"
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
            >
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="notPaid">Not Paid</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Order
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Close
        </Button>
      </DialogActions>
      
    </Dialog>
    
            </>
  );
};

export default OrderForm;
