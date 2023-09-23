import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const LeftPart = styled(Box)`
  width: 13%;
  border-right: 1px solid #f0f0f0;
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
  /* margin-bottom: 100px; */
  padding-bottom: 10px;
  height: 321px;
  padding: 25px 15px;
  /* display: flex; */
`;

const Img = styled(`img`)`
  height: 170px;
  width: auto;
`;
const Wrapper = styled(Box)`
  text-align: center;
  height: 285px;
  margin-right: 10px;
  /* margin-bottom: 15px; */
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
const Slide = ({ products, title, selected }) => {
  // let product1 = products[0]
  // console.log(products)
  // products = Object.values(products)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  // console.log(products,'Hello baby')
  return (
    <Box style={{ backgroundColor: "white" }}>
      <LeftPart>
        <Box style={{ marginTop: 50 }}>
          <Box
            style={{
              fontSize: 26,
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
        {true && (
          <Carousel
            selectedIndex={5}
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
            {products?.map((product) => {
              return (
                <Link
                  key={product._id}
                  to={`/getProduct/${product._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Wrapper
                    style={{
                      textAlign: "center",
                      border: "1px solid #f9f9f9",
                      borderRadius: 2,
                      padding: "4px 0px",
                    }}
                    key={product._id}
                  >
                    <Img src={product.image} alt="haha" />

                    <Typography
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        margin: '10px 0 0 3px',
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.title.shortTitle}
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Box></Box>
                      <Typography
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: 16,
                          color: "#388e3c",
                          lineHeight: 1.4,
                          paddingTop: "4px",
                          marginRight: 6,
                        }}
                      >
                        {" "}
                        ₹{product.price.cost}
                      </Typography>
                      <img
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        height={16}
                        width={60}
                        alt=""
                      />
                    </Box>
                    <Typography
                      style={{
                        opacity: 0.6,
                        fontSize: 14,
                        margin:'3px 0 0 0',
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        whiteSpace: "normal",
                        paddingTop: 1,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {product.tagline}
                    </Typography>
                  </Wrapper>
                </Link>
              );
            })}
          </Carousel>
        )}
      </RightPart>
    </Box>
  );
};

export default Slide;
