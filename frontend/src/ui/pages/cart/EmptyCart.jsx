import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "64px auto",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
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
          Flipkart
        </Typography>
        <Typography style={{ width: "25%" }}>Grocery</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "",
          marginTop: "20px",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "30px 0px 36px",
        }}
      >
        <Box style={{}}>
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
            height={162}
            width={222}
          />
        </Box>
        <Typography
          style={{ fontSize: 18, marginTop: "24px", color: "#212121" }}
        >
          Missing Cart Items?
        </Typography>
        <Typography style={{ fontSize: 12, marginTop: 10 }}>
          Go to shopping to see the items in cart
        </Typography>
        <Box>
          <Button
            style={{
              color: "white",
              backgroundColor: "#FB641B",
              padding: "12px 72px",
              marginTop: 20,
            }}
            onClick = {()=>navigate('/')}
          >
            Go to Shopping
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyCart;
