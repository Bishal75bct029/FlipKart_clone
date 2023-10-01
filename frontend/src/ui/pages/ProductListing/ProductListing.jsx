import { Box } from "@mui/material";
import Filters from "./components/Filters";
import Space from "../../components/Space";
import ProductsView from "./components/ProductsView";
import Navbar from "../../components/Navbar";
import ViewProductTest from "../ProductDetails/ViewProductTest";
import { useSelector } from "react-redux";
const ProductListing = () => {
  const products = useSelector((state) => state.searchResults);
  console.log(products);
  return (
    <>
        <Navbar />
        {
          products.loading ?
          <Box
          style={{
        margin: "56px 0 0 0",
        width: "100%",
        height: "100%",
        // backgroundColor: "green",
        flexGrow: 1,
      }}
      >
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
        }}
        >
        <Box style ={{width:'20%',minWidth:'180px'}}>
          <Space>
            <Filters />
          </Space>
        </Box>
        <Box style={{ flexGrow: 1, height: "100%" }}>
          
            <ProductsView type = {'search'} />
          
        </Box>
      </Box>
    </Box>:
    <></>
      }
        </>
        );
      };
      
      export default ProductListing;
      