import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Menu,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router";
import { SearchProduct } from "../../../../redux/actions/searchResult";

const SortProducts = ({type}) => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search);
  const searchParam = queryParams.search
  const categoryParam = queryParams.category;
  const [value, setValue] = useState(1);
  // const products = useSelector(state=>state.searchResults);
  const [test, setTest] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.searchResults);
  // const copyProducts = [...products];
  const filters = useSelector(state=>state.filterValue);
  function getRandomSortOrder() {
    // This function returns a random number between -1, 0, and 1
    return Math.random() - 0.5;
  }
  
  console.log(filters,'chomu')
  console.log(type,'i am type')
  const handleSort = (types) => {
    let apiUrl
    if(type === 'search'){

      
      if(filters.minValue != 0 || filters.maxValue != 99999999){
        console.log("k xa")
        
        apiUrl = `https://flip-kart-clone-ojm5.vercel.app//sortProducts?sort=${types}&search=${searchParam}&minPrice=${filters.minValue}&maxPrice=${filters.maxValue}`
        console.log(apiUrl,'k vayo yr')
      }else{
        
        apiUrl = `https://flip-kart-clone-ojm5.vercel.app//sortProducts?sort=${types}&search=${searchParam}`
      }
    }else{
      
        
        apiUrl = `https://flip-kart-clone-ojm5.vercel.app//product_by_category?sort=${types}&category=${categoryParam}`
    }
      
        console.log(apiUrl,'honi')
        dispatch(SearchProduct(apiUrl))
        
        console.log(products, "hahahahahahahahaha");
        // products.push({price:{cost:10}})
        console.log(products);
        
        // dispatch({ type: "sort_result", payload: copyProducts });
        // setTest(products);
        // setTest(test=>!test);
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
        alignItems: "center",
        margin: `${type =='search'?'0 20px 0 0':'0 60px'}`,
      }}
    >
    
      <Typography
        style={{ fontSize: 14, color: "#666666", margin: "20px 10px" }}
      >


        {products.search_results.length} items found for {type ==='search'?searchParam:categoryParam}
      </Typography>
      <Box style={{ display: "flex", alignItems: "center" }}>
        {/* <span>Sorted By:</span> */}
        <Typography
          style={{
            whiteSpace: "nowrap",
            marginRight: 8,
            fontSize: "14px",
            color: "#000000A6",
          }}
        >
          Sort By:
        </Typography>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">Sorted By</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            // label="Sort By"
            // onChange={handleChange}
            sx={{
              width: "170px",
              color: "#000000A6",
              height: "40px",
              fontSize: 15,
            }}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <MenuItem value={1} onClick={() => {handleSort('best');setValue(1)}}>
              Best Match
            </MenuItem>
            <MenuItem value={2} onClick={() => {handleSort('asc');setValue(2)}}>
              Price Low to High
            </MenuItem>
            <MenuItem value={3} onClick={() => {handleSort('desc'),setValue(3)}}>
              Price High to Low
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SortProducts;
