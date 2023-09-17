import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartBody = () => {
  const email = useSelector(state => state.loginCredentials)
  console.log(email,"k timi yeha xau ta");
  return (
    <Box
      style={{
        display: "flex",
        flexWrap:'wrap',
        width: "100%",
        padding: "0 40px",
        marginTop: "70px",
      }}
    >
      <Box style={{ width: "60%" }}>
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              minWidth:550,
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

        <Box
          style={{
            backgroundColor: "white",
            padding: "10px 20px",
            display: "flex",
            width: "100%",
            minWidth:500,
          }}
        >
          <Box style={{ display: "flex", justifyContent: "", width: "70%",minWidth:500 }}>
            <img
              src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/w/v/b/-original-imagz3cuzzsyh8ud.jpeg?q=90"
              alt="Img"
              style={{ height: "112px", width: "auto", marginRight: "30px" }}
            />
            <Box>
              <Typography style={{ fontSize: 16, color: "#212121" }}>
                Infinix HOT 30i (Glacier Blue, 128 GB)
              </Typography>
              <Typography style={{ color: "#878787", fontSize: 14 }}>
                8GB RAM
              </Typography>
              <Box
                style={{
                  display: "flex",
                  margin: "8px 0",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{ color: "#878787", fontSize: 14, marginRight: "5px" }}
                >
                  Seller Flasher Commerce
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
                    marginRight: "6px",
                  }}
                >
                  ₹11,999
                </Typography>
                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#212121",
                    marginRight: "6px",
                  }}
                >
                  ₹8,999
                </Typography>
                <Typography
                  style={{
                    color: "#388e3c",
                    fontSize: 14,
                    fontWeight: 500,
                    marginRight: "6px",
                  }}
                >
                  25% Off
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography style={{ fontSize: 14, color: "#212121", marginTop: 4 }}>
            Delivery By Sun Sep 20
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <Button
            style={{
              fontSize: 14,
              fontWeight: 500,
              margin: "10px",
              letterSpacing: "0px",
              cursor: "pointer",
              color:'#212121'
            }}
          >
            SAVE FOR LATER
          </Button>
          <Button
            style={{
              fontSize: 14,
              fontWeight: 500,
              margin: "10px",
              cursor: "pointer",
              color:'#212121'
            }}
          >
            REMOVE
          </Button>
        </Box>
        <Button
          style={{
            backgroundColor: "#fb641b",
            padding: "12px 20px",
            fontSize: 14,
            color: "white",
            margin: "0px 10px 10px",
            width: "150px",
            height: "51px",
          }}
        >
          {" "}
          Place Order
        </Button>
      </Box>
      <Box
        style={{
          backgroundColor: "white",
          marginLeft: "15px",
          padding: "13px 24px",
          width: "30%",
          minWidth:400,
        }}
      >
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
        <Box style ={{display:'flex',justifyContent:'space-between',marginBottom:'18px'}}>
          <Typography style={{ fontSize: 16, color: "#212121" }}>
            Price (1 item)
          </Typography>
          <Typography style={{ fontSize: 16, color: "#212121" }}>₹2,43,990</Typography>
        </Box>
        <Box style ={{display:'flex',justifyContent:'space-between',marginBottom:'18px'}}> 
          <Typography style={{ fontSize: 16, color: "#212121" }}>Discount</Typography>
          <Typography style={{ fontSize: 16, color: "#388e3c" }}>− ₹29,500</Typography>
        </Box >
        <Box style ={{display:'flex',justifyContent:'space-between'}}> 
          <Typography style={{ fontSize: 16, color: "#212121" }}>Delivery Charges</Typography>
          <Typography style={{ fontSize: 16, color: "#717478" }}>₹120 <span style={{color:'#388e3c'}}>Free</span></Typography>
        </Box >
        <Divider style={{margin:'20px 0 '}}/>
        <Box style ={{display:'flex',justifyContent:'space-between',}}> 
          <Typography style={{  color: "#212121",fontSize:18,fontWeight:500 }}>Total Amount</Typography>
          <Typography style={{  color: "#212121",fontSize:18,fontWeight:500 }}>₹2,14,490</Typography>
        </Box >
        <Divider style={{margin:'20px 0'}}/>
        <Typography style={{fontSize:16,color:'#388e3c',fontWeight:500}}>You will save ₹29,500 on this order </Typography>
      </Box>
    </Box>
  );
};

export default CartBody;
