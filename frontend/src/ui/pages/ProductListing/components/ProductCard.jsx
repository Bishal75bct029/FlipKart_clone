import styled from "@emotion/styled";
import { Box, Menu, Typography } from "@mui/material";

const Img = styled('img')`
    /* width:250px; */
    width: auto;
    height:270px;
    max-width: 250px;
    /* max-height:280px; */
    border-radius: 2px;
    
`

const ProductCard = ({url,mrp,cost,tagline}) => {
  return (
    <Box
          style={{
            display: "flex",
            flexDirection: "column",
            
            width: "300px",
            // backgroundColor: "green",
            paddingLeft:'10px',
            height: "440px",
            borderRadius: "2px",
            margin:'10px 20px 20px 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
            <Box style ={{height:'275px',width:280,textAlign:'center',margin:'0 auto'}}>

          <Img
            src={url}
            alt=""
            
            />
            </Box>
          <Typography style={{fontSize:12,color:'#BDBDBD',margin:'10px 0 0 0'}}>Sponsored</Typography>
          <Typography style ={{fontSize:14,color:'#878787',margin:'0px 0 0 0'}}>QROMOS</Typography>
          <Typography style ={{fontSize:14,color:'#212121',margin:'2px 0 0 0' ,display: '-webkit-box',      
    WebkitLineClamp: 1,         
    WebkitBoxOrient: 'vertical', 
    whiteSpace: 'normal',  paddingTop:1,textOverflow:'ellipsis',overflow:'hidden'}}>{tagline}</Typography>
          <Typography style ={{fontSize:12,color:'#878787',margin:'5px 0'}}>Mulitcolor</Typography>
          <Box style ={{display:'flex',justifyContent:'space-between',width:'60%',margin:'0px 0 5px 0'}}>
            <Typography style ={{fontSize:16,color:'#212121',fontWeight:500}}>{cost}</Typography>
            <Typography style ={{fontSize:14,color:'#878787',textDecoration:'line-through'}}>{mrp}</Typography>
            <Typography style ={{fontSize:13,color:'#388E3C'}}>30% off</Typography>
          </Box>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="assured" style={{height:'18px',width:'66px'}}/>
        </Box>
  )
}

export default ProductCard