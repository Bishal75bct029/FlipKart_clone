import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import {
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../../../redux/constants/handleLoginDialog";
import { ADDED_TO_CART } from "../../../../redux/constants/cart";
import { LOGIN_SUCCESS } from "../../../../redux/constants/userLogin";
import {
  CART_FAILED_TOAST,
  CART_SUCCESS_TOAST,
} from "../../../../redux/constants/cartToast";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 70,
  // marginRight:100,
  paddingRight: 25,
  justifyContent: "space-between",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    // backgroundColor:'red'
    
  },
}));

const ResponsiveBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: 20,
  marginRight: 10,
  alignItems: "center",
  width: 500,
  maxHeight: "90vh",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    margin:'auto'
  },

}));
const ResponsiveBox3 = styled(Box)(({ theme }) => ({
  height: 440, 
  marginLeft: 20,
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    margin:'auto',
    width:'80%',
  },

}));

const Bttn = styled("button")`
  width: 32px;
  height: 32px;
  background-color: "#EFF0F5";
  border-radius: 2px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 24px;
  border: 4px solid transparent;

  &:hover {
    background-color: white;
  }
  &:active {
    background-color: "#EFF0F5";
  }
`;
const ImageSection = styled(Box)`
  width: 500px;
  margin: auto;
  height: auto;
  /* max-width: 300px; */
  /* overflow: hidden; */
  margin-bottom: 10px;
  border: 2px solid black;
  /* height: auto;   */
  border: 1px solid #f0f0f0;
  text-align: center;
`;
const Btn = styled(Button)`
  padding: 18px 8px;
  font-size: 16px;
  background-color: #ff9f00;
  color: white;
  border-radius: 2px;
  width: 216px;
  height: 56px;
  margin-left: 8px;
`;

const Rating = styled(Typography)`
  background-color: #388e3c;
  display: inline-block;
  padding: 2px 4px 2px 6px;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  vertical-align: middle;
`;
const Logo = styled("img")`
  width: 77px;
  height: 21px;
  margin-top: 4px;
`;

const ViewProduct = () => {
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const cartToast = useSelector((state) => state.cartToast);
  const [isLoaded,setIsLoaded] = useState(false);

  
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState();
  const carts = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const loginCredentials = useSelector(state=>state.loginCredentials)
  const { id } = useParams();
  console.log(useParams());
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query);
  const page = parseInt(query.get("key") || "1", 10);
  console.log(page, "iam page");

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (onQuantityChange) {
        onQuantityChange(quantity - 1);
      }
    }
  };

  useEffect(() => {
    if (cartToast.cart === "failed") {
      toast.error("Failed To Add at Cart");
      console.log("hello");
    }
  }, [cartToast]);
  const addToCart = async () => {
    if (!loginCredentials.token) {
      return dispatch({ type: OPEN });
    } else if (loginCredentials.role !== "buyer") {
      return;
    }

    try {
      if (!product) {
        return;
      }
      const token = `${loginCredentials.token}`;
      console.log(token, "ma ta token ho");
      const cartApi = await axios.post(
        `https://flip-kart-clone-9xew.vercel.app//cart/${id}`,
        { quantity },
        { headers: { authorization: token } }
      );
      console.log("successfully added to the cart");
      dispatch({ type: CART_SUCCESS_TOAST });
      const response = await axios.get(`https://flip-kart-clone-9xew.vercel.app//cart_data`, {
        headers: { authorization: token },
      });
      dispatch({ type: ADDED_TO_CART, payload: response.data.cartItems });
      console.log(response.data, "added");
      navigate("/cart");
    } catch (error) {
      dispatch({ type: CART_FAILED_TOAST });
      console.log("fail to add at cart", error.response.data);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const apiUrl = `https://flip-kart-clone-9xew.vercel.app//getProduct/${id ? id : ""}`;

      try {
        const response = await axios.get(apiUrl);
        console.log("haha");
        const jsonData = await response.data;
        setIsLoaded('loaded')
        console.log(jsonData);
        setProduct({ ...product, ...jsonData });
        console.log(product);
        // return jsonData
      } catch (error) {
        setIsLoaded('notloaded');
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
        <Navbar />
      {
        isLoaded ?
    <Box>
        <ResponsiveBox>
        <ResponsiveBox2>
          <ImageSection>
            {product && (
              <img
              src={product.image}
              alt=""
              style={{
                marginTop: "8px",
                height: "400px",
                width: "auto",
                maxWidth: "490px",
              }}
              />
              )}
          </ImageSection>
          <Box style={{ display: "flex", paddingBottom: "70px" }}>
            <Btn onClick={addToCart}>
              <ShoppingCartIcon />
              ADD TO CART
            </Btn>
            <Btn style={{ backgroundColor: "#FB641B" }}>
              <FlashOnIcon />
              BUY NOW
            </Btn>
          </Box>
        </ResponsiveBox2>
        <ResponsiveBox3>
          <Typography style={{ fontSize: 18, color: "#212121" }}>
            {product && product.title.longTitle}
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 320,
              marginTop: 4,
            }}
            >
            <Rating>
              4.5
              <StarIcon
                style={{ fontSize: 12, lineHeight: 1, margin: "2px 0 0 2px" }}
                />
            </Rating>
            <Box
              component="span"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#878787",
                margin: "0 8",
              }}
              >
              1,278 Ratings & 133 Reviews
            </Box>
            <Logo
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
              />
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: 325,
              margin: "15px 0",
            }}
          >
            <Box
              // component="span"
              style={{
                fontSize: 24,
                lineHeight: 1.4,
                color: "#212121",
                fontWeight: 500,
                marginRight: 15,
              }}
              >
              ₹{product && product.price.cost}
            </Box>
            <Box
              // component="span"
              style={{
                color: "#878787",
                fontSize: 16,
                textDecorationLine: "line-through",
                marginRight: 15,
              }}
              >
              ₹ {product && product.price.mrp}
            </Box>
            <Box
              // component="span"
              style={{
                color: "#388e3c",
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: "-.5px",
              }}
              >
              {product && product.price.discount} off
            </Box>
          </Box>
          <Typography
            style={{
              marginBottom: 5,
              fontSize: 16,
              color: "#212121",
              fontWeight: 500,
            }}
            >
            Available Offers
          </Typography>
          <Typography

style={{ marginBottom: 5, fontSize: 14, color: "#212121" ,display:'flex'}}
>
            <LoyaltyIcon
              style={{
                margin: "0 8",
                color: "green",
                lineHeight: 1.4,
                fontSize: 18,
                textAlign: "center",
              }}
              />
            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months
            EMI Txns, Min Txn Value ₹10,000T&C
          </Typography>
          <Typography
            style={{ marginBottom: 5, fontSize: 14, color: "#212121",display:'flex' }}
            >
            <LoyaltyIcon
              style={{
                margin: "0 8",
                color: "green",
                lineHeight: 1.4,
                fontSize: 18,
                textAlign: "center",
              }}
              />
            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months
            EMI Txns, Min Txn Value ₹10,000T&C
          </Typography>
          <Typography
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" ,display:'flex'}}
            >
            <LoyaltyIcon
              style={{
                margin: "0 8",
                color: "green",
                lineHeight: 1.4,
                fontSize: 18,
                textAlign: "center",
              }}
              />
            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months
            EMI Txns, Min Txn Value ₹10,000T&C
          </Typography>
          <Typography
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" ,display:'flex'}}
            >
            <LoyaltyIcon
              style={{
                margin: "0 8",
                color: "green",
                lineHeight: 1.4,
                fontSize: 18,
                textAlign: "center",
              }}
              />
            Bank OfferFlat ₹200 off on HDFC Bank Credit/Debit Card on 3 months
            EMI Txns, Min Txn Value ₹10,000T&C
          </Typography>

          <Box style={{ display: "flex", margin: "40px 0", maxWidth: "90%" }}>
            <Typography
              style={{
                color: "#878787",
                fontSize: "14px",
                marginTop: 2,
                width: 70,
              }}
              >
              Warranty
            </Typography>
            <Typography
              style={{
                marginLeft: 30,
                lineHeight: 1.8,
                fontSize: 14,
                textAlign: "justify",
              }}
            >
              {product && product.hasOwnProperty("warranty") ? (
                product.warranty
                ) : (
                <span>No warranty available</span>
                )}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              margin: "40px 0",
              maxWidth: "90%",
              marginTop: "-15px",
            }}
            >
            <Typography
              style={{ color: "#878787", fontSize: "14px", marginTop: 2 }}
              >
              Description
            </Typography>
            <Typography
              style={{
                marginLeft: 30,
                lineHeight: 1.8,
                fontSize: 14,
                textAlign: "justify",
              }}
            >
              {product && product.description}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              margin: "40px 0",
              maxWidth: "90%",
              marginTop: "-15px",
            }}
            >
            <Typography
              style={{
                color: "#878787",
                fontSize: "14px",
                marginTop: 2,
                width: 70,
              }}
              >
              Size
            </Typography>
            <Typography
              style={{
                marginLeft: 30,
                lineHeight: 1.8,
                fontSize: 14,
                textAlign: "justify",
              }}
            >
              {product && product.hasOwnProperty("size") && product.size ? (
                product.warranty
                ) : (
                  <span>Size Selection Unavailable</span>
                  )}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              maxWidth: "90%",
              height: 50,
              alignItems: "center",
              marginTop: "-15px",
            }}
          >
            <Typography
              style={{
                color: "#878787",
                fontSize: "14px",
                marginTop: 2,
                width: 95,
              }}
              >
              Order
            </Typography>

            <div>
              <Bttn onClick={handleDecrease}>-</Bttn>
              <span style={{ color: "#212121" }}>{quantity}</span>
              <Bttn onClick={handleIncrease}>+</Bttn>
            </div>
            <ToastContainer />
          </Box>
        </ResponsiveBox3>
      </ResponsiveBox> 
    </Box>
      :<></>
  }
    </>
    );
  };
  
  export default ViewProduct;
  