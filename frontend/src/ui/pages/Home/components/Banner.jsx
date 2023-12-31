import  Carousel from "react-multi-carousel";
import { PrevArrow, NextArrow } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../../../constant/constant";
import { Box, styled } from "@mui/material";

const ResponsiveBanner = styled(Box)(({theme})=>({
  marginTop: -15,
  marginBottom: -8,
  [theme.breakpoints.down('sm')]:{
    marginTop:-20,
    height:110
  }
}))

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Img = styled('img')(({theme})=>({

    height: 280,
    width: '100%',
    // marginBottom:'-50px',
    // marginTop:'10px',
    [theme.breakpoints.down('sm')]:{
      height:'100px',
      marginTop:'10px',
      objectFit: 'contain',
    },
    [theme.breakpoints.down('md')]:{
      // height:'100px',
      // marginTop:'10px',
      // objectFit: 'contain',
    }
  }))

  
  return (
    <ResponsiveBanner>
        <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        // customRightArrow={<NextArrow />}
        // customLeftArrow={<PrevArrow />}
        
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        
        transitionDuration={1000}
      
         >
      {bannerData.map((data, index) => {
        return (

                <Img src={data.url} alt="" key={index} />
            
            );
        })}
        </Carousel>
    </ResponsiveBanner>
  );
};

export default Banner;
