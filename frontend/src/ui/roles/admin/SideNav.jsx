import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Space from "../../components/Space";
import { Link } from "react-router-dom";

const SideNav = ({ selected, setSelected }) => {
  return (
    // <Space>
      <Box
        style={{
          width: "250px",
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight:'100vh',
          borderRight:'1px solid #ccc'
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
        <Box
          style={{ display: "flex", flexDirection: "column", margin: "15px 0" }}
        >
          <Link to = "/profile/admin/dashboard" style={{color:'inherit',textDecoration:'none'}}>
          <Box
            onClick={() => setSelected("Dashboard")}
            style={{
              display: "flex",
              padding: "0 15px",
              cursor: "pointer",
              margin: "0px 0 5px 0",
              ...(selected === "Dashboard"
                ? { backgroundColor: "#f0f0f0" }
                : {}),
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
          <Link to = "/profile/admin/orders" style={{color:'inherit',textDecoration:'none'}}>

          <Box
            onClick={() => setSelected("Order")}
            style={{
              display: "flex",
              padding: "5px 15px",
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
          <Link to = "/profile/admin/products" style={{color:'inherit',textDecoration:'none'}}>

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
            <Inventory2OutlinedIcon style={{ marginTop: 5 }} />
            <Typography
              style={{
                fontSize: "16px",
                color: "#1A2142",
                margin: "2px 2px",
                marginTop: 5,
                fontWeight: 500,
              }}
            >
              Products
            </Typography>
          </Box>
          </Link>
          <Link to = "/profile/admin/users" style={{color:'inherit',textDecoration:'none'}}>

          <Box
            onClick={() => setSelected("Users")}
            style={{
              display: "flex",
              cursor: "pointer",
              padding: "0px 15px",
              height: "40px",
              ...(selected === "Users" ? { backgroundColor: "#f0f0f0" } : {}),
            }}
          >
            <PeopleOutlineIcon style={{ marginTop: 5 }} />
            <Typography
              style={{
                fontSize: "16px",
                color: "#1A2142",
                margin: "2px 2px",
                marginTop: 5,
                fontWeight: 500,
              }}
            >
              Users
            </Typography>
          </Box>
          </Link>
          {/* <Box style={{flexGrow:1}}>hello</Box> */}
        </Box>
     
      </Box>
    // </Space>
  );
};

export default SideNav;
