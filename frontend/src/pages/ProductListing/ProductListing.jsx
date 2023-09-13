import { Box } from "@mui/material";
import React from "react";
import Filters from "./components/Filters";
import Space from "../../components/Space";
import ProductsView from "./components/ProductsView";
import Navbar from "../../components/Navbar";
import ViewProductTest from '../ProductDetails/ViewProductTest'
const ProductListing = () => {
  return (
    <Box
      style={{
        margin: "56px 0 0 0",
        width: "100%",
        height: "100%",
        // backgroundColor: "green",
        flexGrow: 1,
      }}
    >
      <Navbar />
      <Box style={{ display: "flex", justifyContent: "space-between",height:'100%' }}>
        <Box>
          <Space>
            <Filters />
          </Space>
        </Box>
        <Box style={{ flexGrow: 1, height: "100%" }}>
          <Space>
            <ProductsView />
            hello
          </Space>
        </Box>
      </Box>
        <ViewProductTest/>
    </Box>
  );
};

export default ProductListing;
