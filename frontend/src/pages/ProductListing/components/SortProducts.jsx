import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const SortProducts = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between",height:'80px',alignItems:'center',marginRight:'20px' }}>
      <Typography style={{fontSize:14,color:'#666666',margin:'20px 10px'}}>143 items found for mobiles</Typography>
      <Box style ={{display:'flex',alignItems:'center'}}>
      {/* <span>Sorted By:</span> */}
      <Typography style ={{whiteSpace:'nowrap',marginRight:8,fontSize:'14px',color:'#000000A6'}}>Sort By:</Typography>
      <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Sorted By</InputLabel> */}
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={10}
    // label="Sort By"
    // onChange={handleChange}
    sx={{
        width:'170px',
        color:'#000000A6',
        height:'40px',
        fontSize:15
    }}
  >
    <MenuItem value={10}>Best Match</MenuItem>
    <MenuItem value={20}>Price Low to High</MenuItem>
    <MenuItem value={30}>Price High to Low</MenuItem>
  </Select>
  </FormControl>
      </Box>
    </Box>
  );
};

export default SortProducts;
