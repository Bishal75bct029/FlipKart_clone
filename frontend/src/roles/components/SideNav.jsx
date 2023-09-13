import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const SideNav = () => {
  const [selected,setSelected] = useState('Dashboard');
  return (
    <Box
      style={{
        width: "250px",
        backgroundColor: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "",
      }}
    >
      <Typography style={{ fontSize: 24, fontWeight: 500, color: "#1A2142" ,margin:'15px 0',whiteSpace:'nowrap'}}>
        Seller Dashboard
      </Typography>
      <Divider/>
      <Box style={{ flexGrow: 1,margin:'15px 0' }}>
        <Box onClick ={()=>setSelected('Dashboard')} style={{ display: "flex", padding: "0 15px", cursor: "pointer",margin:'0px 0 5px 0' ,...(selected === 'Dashboard'?{backgroundColor:'#f0f0f0'}:{}),borderRadius:'3px'}}>
          <GridViewOutlinedIcon style={{ margin: "8px 2px", fontWeight: 500 }} />
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin: "10px 0px",

              fontWeight: 500,
              
            }}
            
          >
            Dashboard
          </Typography>
        </Box>
        <Box onClick ={()=>setSelected('Order')} style ={{display:'flex',padding:'0px 15px',height:'40px', ...(selected === 'Order'?{backgroundColor:'green'}:{}),cursor:'pointer'}}>
          <LocalMallOutlinedIcon/>
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin:'2px 2px',
              
              
              fontWeight: 500,
            }}
          >
            Orders
          </Typography>
        </Box>
        <Box onClick ={()=>setSelected('Product')} style ={{display:'flex',cursor:'pointer',padding:'0px 15px',height:'40px', ...(selected === 'Product'?{backgroundColor:'#f0f0f0'}:{})}}>
        
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin:'2px 2px',
              
              
              fontWeight: 500,
            }}
          >
            <Inventory2OutlinedIcon/>
            Products
          </Typography>
        </Box>
      </Box>
      {/* <Typography>@Support</Typography> */}
    </Box>
  );
};

export default SideNav;
