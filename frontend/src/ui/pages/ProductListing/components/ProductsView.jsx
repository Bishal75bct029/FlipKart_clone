import { Box, Menu, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SortProducts from "./SortProducts";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { useLocation } from "react-router";
import { SearchProduct } from "../../../../redux/actions/searchResult";

const ProductsView = () => {
  const products = useSelector(state=>state.searchResults);
  const location = useLocation();
  const dispatch = useDispatch()
  useEffect(()=>{
    const queryParams = queryString.parse(location.search);
  const searchParam = queryParams.search
  const apiUrl = `http://localhost:8000/search?search=${searchParam}`
  dispatch(SearchProduct(apiUrl))
  
  },[])
  console.log(products,'products hai mein')
  return (
    <Box style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <SortProducts />
      <Box style={{ display: "flex",justifyContent:'space-around',flexWrap:'wrap' }}>
        {console.log(products)}
        {products.map((product,index)=>{
          return (
            <Link to = {`/getProduct/${product._id}`} style={{textDecoration:'none'}}>
              <ProductCard url ={product.url} mrp = {product.price.mrp} cost = {product.price.cost}/>  
            </Link>)
        })}
        {/* <ProductCard url = 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/w/l/q/xxl-trndflctn20-trendivastra-original-imagqrzfyy9hyadw.jpeg?q=70'/>  
        <ProductCard url= "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/c/a/5/m-bandhani-kurti-pmd-fashion-original-imagn26ckmjujmjq.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/e/e/s-kurta-rahul-look-original-imaga2g6qmhbywdf-bb.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/5/v/l-sky-short-kurta-us-fashion-original-imagzybjr9njhawr.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/j/b/l-kurta-goldcoin-elepants-original-imagdrj5fhumebut-bb.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/e/k/s-np-201-maroon-zari-sitara-kurti-nazimprint-original-imagsgzshvt6t6nw.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/e/y/xs-na-26454-libas-original-imagzk7gsmmbfpbh.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/y/x/6/xl-drt04-deemoon-original-imaghdffhrqz8r24.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/l3929ow0/kurta/e/m/n/xxl-beige-linen-kurtaax-spoque-original-imageewqxjeftm2p.jpeg?q=70"/>  
        <ProductCard url ="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/m/2/f/s-kurta-36-anujfashion-original-imagq2r9h5jazdag.jpeg?q=70"/>    */}
      </Box>
    </Box>
  );
};

export default ProductsView;
