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

const SortProducts = () => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search);
  const searchParam = queryParams.search
  const [value, setValue] = useState(1);
  // const products = useSelector(state=>state.searchResults);
  const [test, setTest] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.searchResults);
  const copyProducts = [...products];
  function getRandomSortOrder() {
    // This function returns a random number between -1, 0, and 1
    return Math.random() - 0.5;
  }
  const handleSort = (type) => {
    
      const apiUrl = `http://localhost:8000/sortProducts?sort=${type}&search=${searchParam}`
      console.log(apiUrl)
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
        marginRight: "20px",
      }}
    >
      <Typography
        style={{ fontSize: 14, color: "#666666", margin: "20px 10px" }}
      >
        {products.length} items found for {searchParam}
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
            <MenuItem value={1} onClick={() => handleSort('asc')}>
              Best Match
            </MenuItem>
            <MenuItem value={2} onClick={() => handleSort('asc')}>
              Price Low to High
            </MenuItem>
            <MenuItem value={3} onClick={() => handleSort('desc')}>
              Price High to Low
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SortProducts;
