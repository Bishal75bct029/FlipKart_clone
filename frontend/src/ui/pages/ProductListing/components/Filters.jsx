import {
  Box,
  Button,
  Checkbox,
  Divider,
  Slider,
  TextField,
  Typography,
  withStyles,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "@emotion/styled";
import { SearchProduct } from "../../../../redux/actions/searchResult";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import queryString from "query-string";
import { SEARCH_SUCCESS } from "../../../../redux/constants/searchResults";
import { FILTER_SUCCESS } from "../../../../redux/constants/filterValue";
import { useEffect } from "react";
// import Button from '@mui/material/Button';

const CustomSlider = styled(Slider)`
  width: 236px;
  height: 6px;
  /* color: '#2874f0'; */
  .MuiSlider-thumb {
    width: 13px;
    height: 13px;
    color: white;
    border: 1px solid #bababa;
  }

  .MuiSlider-rail {
    background: grey;
    /* background: transparent; */
    height: 2px;
  }

  .MuiSlider-track {
    color: "#2874f0";
  }
`;

const FilterPrice = styled(TextField)`
  width: 85px;
  margin-right: 10px;
  font-size: 10px;
  /* padding: 0; */
`;
const Btn = styled(Button)`
  width: 30px !important;
  min-width: 10px;
  color: white;
  /* margin-left:5px; */
  background-color: #2874f0;
  padding: 0;
`;

const Filters = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.searchResults);
  const filterValue = useSelector((state) => state.filterValue);
  let newFilterValue;
  const [sliderValue, setSliderValue] = useState([0, filterValue.maxPrice]);
  console.log("slidervalue", sliderValue);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    console.log(newFilterValue, "love u");
    dispatch({
      type: FILTER_SUCCESS,
      payload: { minValue: newValue[0], maxValue: newValue[1] },
    });
    console.log(filterValue);
  };

  useEffect(() => {
    const initialMinPrice = 0;
    const initialMaxPrice = 10001;

    // setMinPrice(initialMinPrice);
    // setMaxPrice(initialMaxPrice);

    // Optionally, reset priceRange to default as well
    setSliderValue([initialMinPrice, initialMaxPrice]);
  }, [filterValue.maxPrice, filterValue.minPrice]);

  // newFilterValue = [...sliderValue];
  const handleFilter = () => {
    let minPrice, maxPrice;
    if (sliderValue[0] > 0 || sliderValue[1] < 10001) {
      minPrice = sliderValue[0];
      maxPrice = sliderValue[1];
      const queryParams = queryString.parse(location.search);
      const searchParam = queryParams.search;
      console.log("min price", minPrice, "and", "maxprice");
      // console.log(location,"Location i am");
      console.log("handleFilter", newFilterValue);
      dispatch(
        SearchProduct(
          `http://localhost:8000/search?search=${searchParam}&minPrice=${minPrice}&maxPrice=${maxPrice}`
        )
      );
    }
  };
  const maxPrice = products.reduce((max, product) => {
    return Math.max(max, product.price.mrp);
  }, -Infinity);
  console.log(maxPrice,'maxprice')
  return (
    <Box
      style={{ width: "270px", backgroundColor: "white", padding: "15px 20px" }}
    >
      <Typography
        style={{
          fontSize: "18px",
          color: "#212121",
          fontWeight: 500,
          margin: "10px 0",
        }}
      >
        Filters
      </Typography>
      <Divider />
      <Box>
        <Typography
          style={{
            margin: "15px 0 5px 0",
            fontSize: "14px",
            color: "#212121",
            fontWeight: 500,
          }}
        >
          Categories
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
          Electronics
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />

          Groceries
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />

          Clothes
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />

          Electronics
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />

          Groceries
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />

          Clothes
        </Typography>
      </Box>
      <Typography
        style={{
          margin: "10px 0",
          fontSize: "15px",
          fontWeight: 500,
          color: "#212121",
        }}
      >

        Price
      </Typography>
      <Box
        style={{
          height: 25,
          backgroundColor: "#E0E0E0",
          width: 236,
          marginBottom: "-16px",
        }}
      ></Box>
      <CustomSlider
        // defaultValue={0}
        value={[sliderValue[0], sliderValue[1]]}
        onChange={handleChange}
        max={maxPrice}
      />
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <FilterPrice
          type="number"
          placeholder="Minimum"
          sx={{
            "& input": {
              height: "15px",
              padding: "8px 4px",
              "&:hover": { outline: "none" },
            },
          }}
          InputProps={{
            style: {
              fontSize: "14px",
              padding: "0px",
              color: "black",
              fontWeight: 400,
            },
          }}
          value={sliderValue[0] != 0 ? sliderValue[0] : ""}
        />
        <Box style={{ display: "flex" }}>
          <FilterPrice
            type="number"
            placeholder="Maximum"
            sx={{ "& input": { height: "15px", padding: "8px 4px" } }}
            InputProps={{
              style: { fontSize: "14px", padding: "0px", marginRight: "0px" },
            }}
            value={sliderValue[1] == 10001 ? "" : sliderValue[1]}
          />
          <Btn style={{display:'flex',position:'relative'}}>
            <Box onClick={handleFilter} style={{position:'absolute',top:3}}>
              <KeyboardArrowRightIcon />
            </Box>
          </Btn>
        </Box>
      </Box>
      <Divider style={{ margin: "20px 0 0 0" }} />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Brand{" "}
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Gender
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787", }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Discount
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Size
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Pattern
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontWeight: 500,
          fontSize: "14px",
          color: "#212121",
        }}
      >
        Occasion
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
      <Typography
        style={{
          margin: "10px 0",
          fontSize: "14px",
          fontWeight: 500,
          color: "#212121",
        }}
      >
        Color
        <KeyboardArrowDownIcon style={{ float: "right", color: "#878787" }} />
      </Typography>
      <Divider />
    </Box>
  );
};

export default Filters;
