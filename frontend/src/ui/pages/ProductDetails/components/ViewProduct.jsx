import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import QuantitySelector from "./QuantitySelector";
import { useDispatch, useSelector } from "react-redux";
import { OPEN } from "../../../../redux/constants/handleLoginDialog";

const ImageSection = styled(Box)`
  width: 500px;

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
  const [product, setProduct] = useState();
  const dispatch = useDispatch()
  const loginCredentials = useSelector(state=>state.loginCredentials)
  const { id } = useParams();
  console.log(useParams())
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query)
  const page = parseInt(query.get('key') || '1', 10);
  console.log(page,"iam page")
  
  const addToCart = async ()=>{
    if(!loginCredentials.token){
      return dispatch({type:OPEN});
    }

    try{
      if(!product){
        return;
      }
      const token = `Bearer ${loginCredentials.token}`
      console.log(token,"ma ta token ho")
      const cartApi = await axios.post(`http://localhost:8000/cart/${id}`,null,{headers:{authorization:token}})
      console.log("successfully added to the cart")
    }catch(error){
      console.log("fail to add at cart",error.response.data)
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const apiUrl = `http://localhost:8000/getProduct/${id ? id : ""}`;

      try {
        const response = await axios.get(apiUrl);
        console.log("haha");
        const jsonData = await response.data;
        console.log(jsonData);
        setProduct({...product, ...jsonData});
        console.log(product)
        // return jsonData
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <Box>
      <Navbar />
      <Box
        style={{
          display: "flex",
          marginTop: 70,
          // marginRight:100,
          paddingRight:25,
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "",
          // margin:'70px 100px 0px 0px'
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginRight:10,
            alignItems: "center",
            width: 500,
            maxHeight: '90vh',
            // justifyContent: "space-around",
            
          }}
        >
          <ImageSection>
            {product && <img src={product.image} alt=""style = {{marginTop:'8px',height:'400px',width:'auto',maxWidth:'490px'}}/>}
          </ImageSection>
          <Box style={{ display: "flex",paddingBottom:'70px' }}>
            <Btn onClick={addToCart}>
              <ShoppingCartIcon />
              ADD TO CART
            </Btn>
            <Btn style={{ backgroundColor: "#FB641B" }}>
              <FlashOnIcon />
              BUY NOW
            </Btn>
          </Box>
        </Box>
        <Box style={{  height: 440, marginLeft: 20 }}>
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
              justifyContent: "space-between",
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
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" }}
          >
            <LoyaltyIcon
              style={{
                margin: "-4 8",
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
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" }}
          >
            <LoyaltyIcon
              style={{
                margin: "-4 8",
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
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" }}
          >
            <LoyaltyIcon
              style={{
                margin: "-4 8",
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
            style={{ marginBottom: 5, fontSize: 14, color: "#212121" }}
          >
            <LoyaltyIcon
              style={{
                margin: "-4 8",
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
              style={{ color: "#878787", fontSize: "14px", marginTop: 2,width:70 }}
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
              {product && product.hasOwnProperty('warranty') ? product.warranty :
              <span>No warranty available</span>
              }
            </Typography>
          </Box>
          <Box style={{ display: "flex", margin: "40px 0", maxWidth: "90%", marginTop:'-15px' }}>
            <Typography
              style={{ color: "#878787", fontSize:   "14px", marginTop: 2 }}
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
          <Box style={{ display: "flex", margin: "40px 0", maxWidth: "90%",marginTop:'-15px' }}>
            <Typography
              style={{ color: "#878787", fontSize: "14px", marginTop: 2,width:70 }}
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
              {product && product.hasOwnProperty('size') && product.size? product.warranty :
              <span>Size Selection Unavailable</span>
              }
            </Typography>
          </Box>
          <Box style ={{display:'flex',maxWidth:'90%',height:50,alignItems:'center',marginTop:'-15px'}}>
            <Typography style={{ color: "#878787", fontSize: "14px", marginTop: 2,width:95}}>Order</Typography>

          <QuantitySelector />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewProduct;
