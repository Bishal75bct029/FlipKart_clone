import { Box } from "@mui/material";
import React from "react";

const Background = ({ children }) => {
  return <Box style = {{width:'100%',height:'100vh', backgroundColor:'#f1f3f6',overflow:'hidden'}}>
    {children}
    </Box>;
};

export default Background;
