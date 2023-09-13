import styled from "@emotion/styled";
import { Box, Menu, Typography } from "@mui/material";

const Img = styled('img')`
    width:250px;
    height:auto;
    max-height:280px;
    border-radius: 2px;
`

const ProductCard = ({url}) => {
  return (
    <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            // backgroundColor: "green",
            height: "440px",
            borderRadius: "2px",
            margin:'10px 8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
            <Box style ={{height:'280px'}}>

          <Img
            src={url}
            alt=""
            style={{ }}
            />
            </Box>
          <Typography style={{fontSize:12,color:'#BDBDBD',margin:'10px 0 0 0'}}>Sponsored</Typography>
          <Typography style ={{fontSize:14,color:'#878787',margin:'0px 0 0 0'}}>QROMOS</Typography>
          <Typography style ={{fontSize:14,color:'#212121',margin:'2px 0 0 0'}}>Pack Of 5 Women Printed Crepe-line Kurta</Typography>
          <Typography style ={{fontSize:12,color:'#878787',margin:'5px 0'}}>Mulitcolor</Typography>
          <Box style ={{display:'flex',justifyContent:'space-between',width:'50%',margin:'0px 0 5px 0'}}>
            <Typography style ={{fontSize:16,color:'#212121',fontWeight:500}}>₹699</Typography>
            <Typography style ={{fontSize:14,color:'#878787',textDecoration:'line-through'}}>₹999</Typography>
            <Typography style ={{fontSize:13,color:'#388E3C'}}>30% off</Typography>
          </Box>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="assured" style={{height:'18px',width:'66px'}}/>
        </Box>
  )
}

export default ProductCard