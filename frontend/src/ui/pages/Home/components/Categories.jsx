import { Box, Typography, styled } from "@mui/material";
import { categoryData } from "../../../../constant/constant";
import { Link } from "react-router-dom";

const ImageWrapper = styled(Box)`
  /* margin-top: 56px; */
  padding-left: 2%;
  color: #212121;
  padding-right: 2%;
  /* margin-bottom: 20px; */
  display: flex;
  width: 100%;
  height: 132px;
  overflow-x: scroll;
  min-width: 100%;
  width:'auto';
  /* overflow-x: visible; */
  overflow-y: hidden;
  justify-content: space-around;
`;

const Img = styled("img")`
  height: 64px;
  width: 64px;
`;
const Categories = () => {
  
  return (
    <Box style ={{marginTop:56,minWidth:'100%',width:'auto',marginBottom:0}}>
    <ImageWrapper>
      {categoryData.map((data, index) => {
        return (
          <Link to = {`/category?category=${data.category}`} style = {{textDecoration:'none',color:'inherit'}}>
            <Box key={index} style = {{padding:'12px 8px 12px 22px',textAlign:'center'}}>
        <Img src={data.url} alt="product" />
        <Box variant = 'span' style = {{fontSize:'14px',fontWeight:500, }}>{data.text}</Box>
            </Box>
          </Link>
        );
      })}
    </ImageWrapper>
       </Box>
  );
};

export default Categories;
