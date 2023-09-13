import { Box, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const ShowInfo = ({data}) => {
  return (
    <Box
      style={{
        padding: "30px 20px",
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow:
          "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)",
      }}
    >
      <Box style ={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <ShoppingCartIcon />
        <Box style ={{margin:'0 10px'}}>
          <Typography
            style={{ color: "#1a214", fontSize: "15px", fontWeight: "600",marginBottom:' 3px' }}
          >
            New Orders
          </Typography>
          <Typography style={{fontSize:20,fontWeight:700,color:'#1a2142',marginBottom:'4px'}}>34567</Typography>
          <Typography style={{color:'#219653',fontSize:14,fontWeight:400}}>+2.0%<span style={{color:'#5d657b',fontWeight:400}}>(30days)</span></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowInfo;
