import { Box } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return <Box style = {{width:'100%', backgroundColor:'#f1f3f6',overflow:'',paddingTop:7,minHeight:'100vh'}}>
    {children}
    </Box>;
};

export default Background;
