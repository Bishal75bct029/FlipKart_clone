import { Box, Button, Divider, Grid, Typography, styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADDED_TO_CART } from "../../../redux/constants/cart";
import {
  calculateDiscount,
  calculateMRP,
} from "../../features/functions/calculatePrice";
import OrderForm from "./OrderForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartToast } from "../../../redux/reducers/cartToast";
import { RESET_CART_TOAST } from "../../../redux/constants/cartToast";

const ResponsiveBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  padding: "0 40px",
  marginTop: "70px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    paddingBottom: 10,
    margin:'70px auto 0'
  },
}));

const ResponsiveBox2 = styled(Box)(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const ResponsiveBox3 = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "10px 20px",
  display: "flex",
  width: "100%",
  marginBottom: 5,
  [theme.breakpoints.sm]: {
    flexDirection: "column",
  },
}));

const Bill = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  marginLeft: "auto",
  padding: "13px 24px",
  width: "35%",
  minWidth: "300px",
  maxHeight: 350,

  [theme.breakpoints.down('lg')]:{
    width:'100%',
    marginLeft:0,
    margin:'auto'
  }
}));

const CartBody = ({ title, discount, mrp, cost }) => {
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const cartToast = useSelector((state) => state.cartToast);
  console.log(loginCredentials, "cartbody bata");
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(0);
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`https://flip-kart-clone-ojm5.vercel.app//cart_data`, {
          headers: { Authorization: loginCredentials.token },
        });
        dispatch({ type: ADDED_TO_CART, payload: response.data.cartItems });
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCartData();
  }, [loginCredentials]);
  // console.log(email, "k timi yeha xau ta");

  const handleDelete = async (id) => {
    if (confirm("Are you sure want to delete from cart?")) {
      try {
        await axios.delete(`https://flip-kart-clone-ojm5.vercel.app//delete_cart/${id}`);
        const response = await axios.get(`https://flip-kart-clone-ojm5.vercel.app//cart_data`, {
          headers: { Authorization: loginCredentials.token },
        });
        console.log(response, "gaddi");
        dispatch({ type: ADDED_TO_CART, payload: response.data.cartItems });
      } catch (error) {
        console.log(error, "error aagaya");
      }
    }
  };

  useEffect(() => {
    if (cartToast.cart === "success") {
      // if(count %2 === 0){

      toast.success("Successfully added to the cart");
      // }
    }
    if(cartToast.cart || cartToast.order){
      dispatch({type:RESET_CART_TOAST});
    }
  }, [cartToast.cart]);
  return (
    <ResponsiveBox1>
      <OrderForm
        open={open}
        setOpen={setOpen}
        setSuccess={setSuccess}
        success={success}
      />
      <ResponsiveBox2>
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              // minWidth: 550,
              alignItems: "center",
              height: "60px",
              padding: "0 10px",
              backgroundColor: "white",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          >
            <Typography style={{ fontSize: 13, color: "#111112" }}>
              From Saved Address
            </Typography>
            <Button
              variant="outlined"
              style={{
                borderRadius: "4px",
                borderColor: "#e0e0e0",
                color: "#2874f0",
                fontWeight: 500,
                backgroundColor: "white",
                padding: "10px 16px",
                fontSize: 14,
                height: 34,
                textTransform: "none",
              }}
            >
              Enter Delivery Pincode
            </Button>
          </Box>
        </Box>

        {console.log(cart, "cart ma k k raixa")}

        {cart.map((data, index) => {
          return (
            <Box key={data._id}>
              <ResponsiveBox3>
                <Box
                  style={{ height: "112px", width: "112px", marginRight: 15 }}
                >
                  <img
                    src={data.productID.image}
                    alt="Img"
                    style={{
                      height: "112px",
                      width: "auto",
                      maxWidth: 112,
                      marginRight: "30px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{
                      fontSize: 16,
                      width: "100%",
                      color: "#212121",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      whiteSpace: "normal",
                      paddingTop: 1,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      fontWeight: 500,
                    }}
                  >
                    {data.productID.title.longTitle}
                  </Typography>
                  <Typography
                    style={{
                      color: "#878787",
                      fontSize: 14,
                      width: "80%",
                      color: "#212121",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      whiteSpace: "normal",
                      paddingTop: 1,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {data.productID.tagline}
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      margin: "8px 0",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "#878787",
                        fontSize: 14,
                        marginRight: "5px",
                        minWidth: 90,
                        // color: "#212121",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      whiteSpace: "normal",
                      paddingTop: 1,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      }}
                    >
                      Seller Flasher Commerce
                    </span>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      style={{ width: 55, height: 15 ,marginRight:30}}
                    />
                  </Box>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      style={{
                        color: "#878787",
                        fontSize: 14,
                        textDecoration: "line-through",
                        marginRight: "16px",
                      }}
                    >
                      ₹{data.productID.price.mrp}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#212121",
                        marginRight: "16px",
                      }}
                    >
                      ₹{data.productID.price.cost}
                    </Typography>
                    <Typography
                      style={{
                        color: "#388e3c",
                        fontSize: 14,
                        fontWeight: 500,
                        marginRight: "6px",
                        // marginBottom:400
                      }}
                    >
                      {data.productID.discount}
                    </Typography>
                  </Box>
                </Box>
                {/* </Box> */}
                <Box>
                  <Typography
                    style={{
                      fontSize: 14,
                      color: "#212121",
                      marginTop: 4,
                      marginLeft: 5,
                    }}
                  >
                    Delivery By Sun Sep 20{" "}
                    <Typography style={{ color: "#878787" }}>
                      {" "}
                      Quantity: ({data.quantity})
                    </Typography>
                  </Typography>
                </Box>
              </ResponsiveBox3>
              <Box style={{ display: "flex" }}>
                <Button
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    margin: "0px 10px 20px 10px",
                    letterSpacing: "0px",
                    cursor: "pointer",
                    color: "#212121",
                  }}
                >
                  SAVE FOR LATER
                </Button>
                <Button
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    margin: "0px 10px 20px 10px",
                    cursor: "pointer",
                    color: "#212121",
                  }}
                  onClick={() => handleDelete(data._id)}
                >
                  REMOVE
                </Button>
              </Box>
            </Box>
          );
        })}
        <Button
          style={{
            backgroundColor: "#fb641b",
            padding: "12px 20px",
            fontSize: 14,
            color: "white",
            margin: "-17px 10px 10px",
            width: "150px",
            height: "51px",
          }}
          onClick={() => setOpen(true)}
        >
          {" "}
          Place Order
        </Button>
      </ResponsiveBox2>
      <Bill>
        <Typography
          style={{
            fontSize: 16,
            color: "#878787",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Price Details
        </Typography>
        <Divider style={{ margin: "12px 0" }} />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <Typography style={{ fontSize: 16, color: "#212121" }}>
            Price ({cart.length} item)
          </Typography>
          <Typography style={{ fontSize: 16, color: "#212121" }}>
            ₹{calculateMRP(cart)}
            {console.log(calculateMRP(cart), "jo hai ")}
            {console.log(calculateDiscount(cart), "bodydekhega")}
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <Typography style={{ fontSize: 16, color: "#212121" }}>
            Discount
          </Typography>
          <Typography style={{ fontSize: 16, color: "#388e3c" }}>
            ₹{calculateDiscount(cart)}
            {console.log(cart, "hihi")}
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ fontSize: 16, color: "#212121" }}>
            Delivery Charges
          </Typography>
          <Typography style={{ fontSize: 16, color: "#717478" }}>
            ₹120 <span style={{ color: "#388e3c" }}>Free</span>
          </Typography>
        </Box>
        <Divider style={{ margin: "20px 0 " }} />
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            style={{ color: "#212121", fontSize: 18, fontWeight: 500 }}
          >
            Total Amount
          </Typography>
          <Typography
            style={{ color: "#212121", fontSize: 18, fontWeight: 500 }}
          >
            ₹{calculateMRP(cart) - calculateDiscount(cart)}
          </Typography>
        </Box>
        <Divider style={{ margin: "20px 0" }} />
        <Typography style={{ fontSize: 16, color: "#388e3c", fontWeight: 500 }}>
          You will save ₹{calculateDiscount(cart)} on this order{" "}
        </Typography>
      </Bill>
      <ToastContainer />
    </ResponsiveBox1>
  );
};

export default CartBody;
