import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const LeftPart = styled(Box)`
  width: 230px;
  height: 321px;
  /* pad */
  padding: 24px 10px 124px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
`;
const ViewBtn = styled(Button)`
  background-color: #2874f0;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 500;
  display: block;
  width: auto;
  height: auto;
  margin: auto;
  margin-top: 24px;
`;
const RightPart = styled(Box)`
  /* float: right; */
  /* background-color: red; */
  max-width: 100%;
  min-width: 20%;
  height: 321px;
  padding: 25px 15px;

`;

const Slide = ({ products,title }) => {
    console.log(products)
    products = Object.values(products)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5 ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Img = styled(`img`)`
    height: 170px;
    width: auto;
  `
  const Wrapper = styled(Box)`
    text-align: center;
    transition: box-shadow 0.3s;
    &:hover{
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2); 
    }
  `
  console.log(products[0])
  return (
    <Box style ={{backgroundColor:'white'}}>
        <LeftPart>
            <Box style={{marginTop:50}}>

          <Box
            style={{
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.38,
                wordWrap: "beak-word",
                textAlign: "center",
            }}
            >
            {title} 
          </Box>
          <ViewBtn variant="contained"> View All</ViewBtn>
              </Box>
        </LeftPart>
      
        <RightPart>
          <Carousel
            swipeable={false}
            draggable={false}
            
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
           
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            
          >
            {
                products[0]?.map(product=>{
                    return(
                      <Link to={`/getProduct/${product._id}`} style={{textDecoration:'none',color:'inherit'}}>
                        <Wrapper style={{textAlign:'center'}}>
                            <Img src={product.url} alt="haha" />
                            <Typography style={{fontSize:14,fontWeight:500,marginTop:15,whiteSpace:'nowrap'}}>{product.title.shortTitle}</Typography>
                            <Typography style={{whiteSpace:'nowrap',fontSize:16,color:'#388e3c',lineHeight:1.4,paddingTop:8}}>{product.discount}</Typography>
                            <Typography style={{opacity:.6,fontSize:14, paddingTop:7}}>{product.tagline}</Typography>
                        </Wrapper>
                       </Link>
                    )
                })
            }
            
         
          </Carousel>
        </RightPart>
      </Box>
  );
};

export default Slide;
