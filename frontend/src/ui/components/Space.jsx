import { Box, styled } from "@mui/material";

const Space = (props) => {
  return (
    <Box 
        style={{ padding: "8px", backgroundColor: "#F2F2F2" }}>
      {props.children}
    </Box>
  );
};

export default Space;
