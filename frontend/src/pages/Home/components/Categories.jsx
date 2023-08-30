import { Box, Typography, styled } from "@mui/material";
import { categoryData } from "../../../constant/constant";

const ImageWrapper = styled(Box)`
  margin-top: 56px;
  padding-left: 2%;
  color: #212121;
  padding-right: 2%;
  /* margin-bottom: 20px; */
  display: flex;
  width: 100%;
  height: 112px;
  
  justify-content: space-around;
`;

const Img = styled("img")`
  height: 64px;
  width: 64px;
`;
const Categories = () => {
  return (
    <ImageWrapper>
      {categoryData.map((data, index) => {
        return (
            <Box key={index} style = {{padding:'12px 8px 12px 22px'}}>
        <Img src={data.url} alt="product" />
        <Box variant = 'span' style = {{fontSize:'14px',fontWeight:500, }}>{data.text}</Box>
            </Box>
        );
      })}
    </ImageWrapper>
  );
};

export default Categories;
