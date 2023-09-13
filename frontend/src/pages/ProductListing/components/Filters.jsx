import {
  Box,
  Button,
  Divider,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from "@emotion/styled";
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
  width:30px !important;
  min-width: 10px;
  color: white;
  /* margin-left:5px; */
  background-color: #2874F0;
  padding: 0;
`

const Filters = () => {
  const [sliderValue, setSliderValue] = useState([0, 10001]);
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <Box style={{ width: "270px", backgroundColor: "white", padding: "15px 20px" }}>
      <Typography
        style={{ fontSize: "18px", color: "#212121", fontWeight: 500,margin:'10px 0' }}
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
          Electronics
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          Groceries
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          Clothes
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          Electronics
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
          Groceries
        </Typography>
        <Typography
          style={{ fontSize: "14px", color: "#878787", marginLeft: "10px" }}
        >
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
        defaultValue={0}
        value={[sliderValue[0], sliderValue[1]]}
        onChange={handleChange}
        max={10001}
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
            style: { fontSize: "14px", padding: "0px",color:"black",fontWeight:400 },
          }}
          value={sliderValue[0] != 0 ? sliderValue[0] : ""}
        />
        <Box style ={{display:'flex'}}>

        <FilterPrice
          type="number"
          placeholder="Maximum"
          sx={{ "& input": { height: "15px", padding: "8px 4px" } }}
          InputProps={{
            style: { fontSize: "14px", padding: "0px",marginRight:'0px' },
          }}
          value={sliderValue[1] == 10001 ? "" : sliderValue[1]}
          />
        <Btn >
          <KeyboardArrowRightIcon/>
        </Btn>
          </Box>
      </Box>
      <Divider style={{ margin: "20px 0 0 0" }}/>
      <Typography style={{ margin: "10px 0" ,fontWeight:500, fontSize:'14px',color:'#212121'}}>
        Brand <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}}/>
      </Typography>
      <Divider/>
      <Typography style={{ margin: "10px 0" ,fontWeight:500, fontSize:'14px',color:'#212121'}}>
        Gender
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}}/>
      </Typography>
      <Divider />
      <Typography style={{ margin: "10px 0",fontWeight:500, fontSize:'14px',color:'#212121' }}>
        Discount
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}} />
      </Typography>
      <Divider />
      <Typography style={{ margin: "10px 0",fontWeight:500, fontSize:'14px',color:'#212121' }}>
        Size
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}} />
      </Typography>
      <Divider />
      <Typography style={{ margin: "10px 0",fontWeight:500, fontSize:'14px',color:'#212121' }}>
        Pattern
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}} />
      </Typography>
      <Divider />
      <Typography style={{ margin: "10px 0",fontWeight:500, fontSize:'14px',color:'#212121' }}>
        Occasion
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}} />
      </Typography>
      <Divider />
      <Typography style={{ margin: "10px 0" ,fontSize:'14px',fontWeight:500,color:'#212121'}}>
        Color
        <KeyboardArrowDownIcon style={{float:'right',color:'#878787'}} />
      </Typography>
      <Divider />
    </Box>
  );
};

export default Filters;
