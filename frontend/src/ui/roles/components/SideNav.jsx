import React, { useState } from "react";
import { Box, Divider, Drawer, Typography, styled } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const ResponsiveBox = styled(Box)(({theme})=>({
  width: "250px",
  backgroundColor: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  height: "",
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}));
const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
  display:'none',
  
  [theme.breakpoints.down('md')]:{
    display:'block',
    position:'absolute',
    top:10,
    left:10,
    fontSize:34,
    cursor:'pointer'
  }
}));

const SideNav = ({ selected, setSelected }) => {
  const [open,setOpen] = useState(false);
  const handleDrawer =()=>{
    setOpen(!open);
  }
  return (
    <>
    <ResponsiveBox
      
    >
      <Typography
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: "#1A2142",
          margin: "15px 0",
          whiteSpace: "nowrap",
        }}
      >
        Seller Dashboard
      </Typography>
      <Divider />
      <Box style={{ flexGrow: 1, margin: "15px 0" }}>
        <Link to = "/profile/seller/dashboard" style={{textDecoration:'none',color:'inherit'}}>
        <Box
          onClick={() => setSelected("Dashboard")}
          style={{
            display: "flex",
            padding: "0 15px",
            cursor: "pointer",
            margin: "0px 0 5px 0",
            ...(selected === "Dashboard" ? { backgroundColor: "#f0f0f0" } : {}),
            borderRadius: "3px",
          }}
          >
          <GridViewOutlinedIcon
            style={{ margin: "8px 2px", fontWeight: 500 }}
            />
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
            </Link>
        <Link to = "/profile/seller/orders" style={{textDecoration:'none',color:'inherit'}}>

        <Box
          onClick={() => setSelected("Order")}
          style={{
            display: "flex",
            padding: "0px 15px",
            height: "40px",
            ...(selected === "Order" ? { backgroundColor: "#f0f0f0" } : {}),
            cursor: "pointer",
          }}
        >
          <LocalMallOutlinedIcon />
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin: "2px 2px",
              fontWeight: 500,
            }}
          >
            Orders
          </Typography>
        </Box>
        </Link>
        <Link to = "/profile/seller/products" style={{textDecoration:'none',color:'inherit'}}>

        <Box
          onClick={() => setSelected("Product")}
          style={{
            display: "flex",
            cursor: "pointer",
            padding: "0px 15px",
            height: "40px",
            ...(selected === "Product" ? { backgroundColor: "#f0f0f0" } : {}),
          }}
        >
          <Inventory2OutlinedIcon style={{marginTop:5}}/>
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin: "2px 2px",
              marginTop:5,
              fontWeight: 500,
            }}
          >
            Products
          </Typography>
        </Box>
        </Link>
      </Box>
      {/* <Typography>@Support</Typography> */}
    </ResponsiveBox>
    <CustomMenuIcon onClick={handleDrawer}/>
      <Drawer
        open ={open}
        anchor = "left"
        onClose ={handleDrawer}
      >
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
      <Typography
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: "#1A2142",
          margin: "15px 0",
          whiteSpace: "nowrap",
        }}
      >
        Seller Dashboard
      </Typography>
      <Divider />
      <Box style={{ flexGrow: 1, margin: "15px 0" }}>
        <Link to = "/profile/seller/dashboard" style={{textDecoration:'none',color:'inherit'}}>
        <Box
          onClick={() => setSelected("Dashboard")}
          style={{
            display: "flex",
            padding: "0 15px",
            cursor: "pointer",
            margin: "0px 0 5px 0",
            ...(selected === "Dashboard" ? { backgroundColor: "#f0f0f0" } : {}),
            borderRadius: "3px",
          }}
          >
          <GridViewOutlinedIcon
            style={{ margin: "8px 2px", fontWeight: 500 }}
            />
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
            </Link>
        <Link to = "/profile/seller/orders" style={{textDecoration:'none',color:'inherit'}}>

        <Box
          onClick={() => setSelected("Order")}
          style={{
            display: "flex",
            padding: "0px 15px",
            height: "40px",
            ...(selected === "Order" ? { backgroundColor: "#f0f0f0" } : {}),
            cursor: "pointer",
          }}
        >
          <LocalMallOutlinedIcon />
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin: "2px 2px",
              fontWeight: 500,
            }}
          >
            Orders
          </Typography>
        </Box>
        </Link>
        <Link to = "/profile/seller/products" style={{textDecoration:'none',color:'inherit'}}>

        <Box
          onClick={() => setSelected("Product")}
          style={{
            display: "flex",
            cursor: "pointer",
            padding: "0px 15px",
            height: "40px",
            ...(selected === "Product" ? { backgroundColor: "#f0f0f0" } : {}),
          }}
        >
          <Inventory2OutlinedIcon style={{marginTop:5}}/>
          <Typography
            style={{
              fontSize: "16px",
              color: "#1A2142",
              margin: "2px 2px",
              marginTop:5,
              fontWeight: 500,
            }}
          >
            Products
          </Typography>
        </Box>
        </Link>
      </Box>
      {/* <Typography>@Support</Typography> */}
    </Box>
      </Drawer>
          </>
  );
};

export default SideNav;
