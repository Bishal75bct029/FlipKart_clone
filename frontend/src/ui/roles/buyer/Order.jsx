import { Box, Typography ,styled} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_DATA_SUCCESS } from "../../../redux/constants/order";
import { ADDED_TO_CART } from "../../../redux/constants/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ResponsiveBox = styled(Box)(({theme})=>({
  width: "60%", 
  margin: "40px auto",
  [theme.breakpoints.down('md')]:{
    width: '90%',
  }
}))

const Order = () => {
  const orders = useSelector((state) => state.order);
  const cartToast = useSelector((state) => state.cartToast);
  const dispatch = useDispatch();
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const [loading,setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getOrders = async () => {
      try {
        if (loginCredentials.token) {
          const response = await axios.get(`https://flip-kart-clone-9xew.vercel.app/get_orders`, {
            headers: { Authorization: loginCredentials.token },
          });
          console.log(response.data.orderItems);
          setLoading("loaded")
          const cartResponse = await axios.get(
            `https://flip-kart-clone-9xew.vercel.app/cart_data`,
            { headers: { Authorization: loginCredentials.token } }
          );
          dispatch({
            type: ORDER_DATA_SUCCESS,
            payload: response.data.orderItems,
          });
          dispatch({
            type: ADDED_TO_CART,
            payload: cartResponse.data.cartItems,
          });
        }
        return;
      } catch (error) {
        setLoading("notLoaded");
        console.log("error", error);
      }
    };
    getOrders();
  }, [loginCredentials]);


  return (
    <>
      {
        loading ?
    <Box style={{ marginTop: "64px" }}>
      
      <ToastContainer />
      <Box
      style={{
        display: "flex",
        backgroundColor: "white",
        height: "60px",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      >
        <Typography
          style={{
            width: "25%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "3px solid #2a55e5",
            color: "#2a55e5",
            fontSize: 16,
          }}
          >
          My Orders
        </Typography>
        <Typography style={{ width: "25%" }}>Grocery</Typography>
      </Box>
      <ResponsiveBox>
        {orders.length === 0 && <Typography style={{width:'25%',color:'#878787',margin:'auto'}}>You have no orders pending</Typography>}
        {orders.map((product) => {
          return (
            <Box
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              display: "flex",
              width: "100%",
              // minWidth: 600,
              marginBottom: 30,
              borderRadius: 2,
              backgroundColor: "#f1f3f6",
              // marginLeft:100,
            }}
            >
              <Box  style ={{display: "flex",
                  justifyContent: "",
                  width: "80%",
                  }}>
                <Box
                  style={{ height: "112px", width: "112px", marginRight: 15 }}
                  >
                  <img
                    src={product.productID.image}
                    alt="Img"
                    style={{
                      height: "112px",
                      width: "auto",
                      marginRight: "30px",
                      maxWidth: 112,
                    }}
                    />
                </Box>
                <Box>
                  <Typography
                    style={{
                      fontSize: 16,
                      
                      width: "100%",
                      paddingRight: "20px",
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
                    {product.productID.title.longTitle}
                  </Typography>
                  <Typography style={{ color: "#878787", fontSize: 14 }}>
                    {product.productID.tagline}
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      margin: "8px 0",
                      alignItems: "center",
                    }}
                    >
                    <Typography
                      style={{
                        color: "#878787",
                        fontSize: 14,
                        marginRight: "5px",
                      }}
                    >
                      Seller {product.productID.createdBy.username}
                    </Typography>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      style={{ width: 55, height: 15 }}
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
                      ₹{product.productID.price.mrp}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#212121",
                        marginRight: "16px",
                      }}
                    >
                      ₹{product.productID.price.cost}
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
                      {product.productID.discount}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box style={{ width: "20%" }}>
                <Typography
                  style={{
                    fontSize: 14,
                    color: "#212121",
                    marginTop: 4,
                    marginLeft: 5,
                  }}
                >
                  Delivery By Sun Sep 20{" "}
                  <Typography
                    style={{ color: "#878787", textTransform: "capitalize" }}
                    >
                    Quantity : ({product.quantity}) <br />
                    <span style={{ fontSize: 13 }}>
                      Status: {product.status}
                    </span>{" "}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </ResponsiveBox>
    </Box>:<></>
      }
    </>
  );
};

export default Order;
